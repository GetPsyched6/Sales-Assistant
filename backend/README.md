# UPS Sales Assistant Backend

FastAPI backend for AI-powered chatbot using IBM WatsonX.

## Setup

1. **Install Dependencies**

```bash
pip install -r requirements.txt
```

2. **Configure Environment Variables**

Create a `.env` file in the `backend/` directory (or move the existing root `.env` here) with:

```
WATSONX_API_KEY=your_watsonx_api_key_here
WATSONX_PROJECT_ID=your_project_id_here
WATSONX_URL=https://us-south.ml.cloud.ibm.com
```

3. **Run the Server**

```bash
# Development mode with auto-reload
uvicorn main:app --reload --port 8000

# Or use the built-in runner
python main.py
```

The API will be available at `http://localhost:8000`

## API Endpoints

### `GET /`

Health check endpoint

### `GET /health`

Detailed health status

### `POST /api/chat`

Chat endpoint for AI conversations

**Request Body:**

```json
{
	"message": "User message here",
	"companyContext": {
		/* Full company data object */
	},
	"conversationHistory": [
		{ "role": "user", "content": "Previous message" },
		{ "role": "assistant", "content": "Previous response" }
	]
}
```

**Response:**

```json
{
	"success": true,
	"response": "AI response here",
	"timestamp": "2025-01-01T12:00:00"
}
```

## Model

Uses `meta-llama/llama-3-405b-instruct` via IBM WatsonX.
