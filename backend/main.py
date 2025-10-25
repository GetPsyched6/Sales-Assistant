from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from typing import List, Dict, Any, Optional
from watsonx_client import WatsonXClient
import logging

# Configure logging
logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

# Initialize FastAPI app
app = FastAPI(
    title="UPS Sales Assistant AI Backend",
    description="Backend API for AI-powered chatbot with WatsonX",
    version="1.0.0",
)

# Configure CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173", "http://localhost:3000"],  # Vite default port
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Initialize WatsonX client
try:
    watsonx_client = WatsonXClient()
    logger.info("WatsonX client initialized successfully")
except Exception as e:
    logger.error(f"Failed to initialize WatsonX client: {e}")
    watsonx_client = None


# Request/Response models
class Message(BaseModel):
    role: str  # "user" or "assistant"
    content: str


class ChatRequest(BaseModel):
    message: str
    companyContext: Dict[str, Any]
    conversationHistory: Optional[List[Message]] = None


class ChatResponse(BaseModel):
    success: bool
    response: Optional[str] = None
    error: Optional[str] = None
    timestamp: Optional[str] = None


@app.get("/")
async def root():
    """Health check endpoint"""
    return {
        "status": "online",
        "service": "UPS Sales Assistant AI Backend",
        "watsonx_initialized": watsonx_client is not None,
    }


@app.get("/health")
async def health_check():
    """Detailed health check"""
    return {
        "status": "healthy",
        "watsonx": "connected" if watsonx_client else "not initialized",
    }


@app.post("/api/chat", response_model=ChatResponse)
async def chat(request: ChatRequest):
    """
    Chat endpoint - receives user message, company context, and conversation history
    Returns AI response from WatsonX
    """
    try:
        if not watsonx_client:
            raise HTTPException(
                status_code=503,
                detail="WatsonX client not initialized. Check API credentials.",
            )

        logger.info(f"Received chat request for company: {request.companyContext.get('companyInfo', {}).get('displayName', 'Unknown')}")

        # Convert conversation history to dict format
        conversation_history = None
        if request.conversationHistory:
            conversation_history = [
                {"role": msg.role, "content": msg.content}
                for msg in request.conversationHistory
            ]

        # Call WatsonX
        result = watsonx_client.chat(
            user_message=request.message,
            company_context=request.companyContext,
            conversation_history=conversation_history,
        )

        if result["success"]:
            from datetime import datetime
            return ChatResponse(
                success=True,
                response=result["response"],
                timestamp=datetime.now().isoformat(),
            )
        else:
            logger.error(f"WatsonX error: {result.get('error')}")
            raise HTTPException(status_code=500, detail=result.get("error"))

    except HTTPException:
        raise
    except Exception as e:
        logger.error(f"Unexpected error in chat endpoint: {e}")
        raise HTTPException(status_code=500, detail=f"Internal server error: {str(e)}")


if __name__ == "__main__":
    import uvicorn

    uvicorn.run(app, host="0.0.0.0", port=8010, reload=True)

