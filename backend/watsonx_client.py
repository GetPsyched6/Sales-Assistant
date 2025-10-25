import os
import requests
from typing import Dict, Any, List, Optional
from dotenv import load_dotenv

load_dotenv()


class WatsonXClient:
    """WatsonX client for chatbot integration"""

    def __init__(self):
        self.api_key = os.getenv("WATSONX_API_KEY")
        self.project_id = os.getenv("WATSONX_PROJECT_ID")
        self.url = os.getenv("WATSONX_URL", "https://us-south.ml.cloud.ibm.com")
        self.access_token = None

        if not self.api_key or not self.project_id:
            raise ValueError(
                "WATSONX_API_KEY and WATSONX_PROJECT_ID must be set in .env file"
            )

    def get_access_token(self, force_refresh: bool = False) -> str:
        """Get access token for Watsonx API with caching"""
        if self.access_token and not force_refresh:
            return self.access_token

        auth_url = "https://iam.cloud.ibm.com/identity/token"
        headers = {
            "Content-Type": "application/x-www-form-urlencoded",
            "Accept": "application/json",
        }
        data = {
            "grant_type": "urn:ibm:params:oauth:grant-type:apikey",
            "apikey": self.api_key,
        }

        try:
            response = requests.post(auth_url, headers=headers, data=data, timeout=30)
            response.raise_for_status()
            self.access_token = response.json()["access_token"]
            return self.access_token
        except Exception as e:
            raise Exception(f"Failed to get access token: {str(e)}")

    def chat(
        self,
        user_message: str,
        company_context: Dict[str, Any],
        conversation_history: Optional[List[Dict[str, str]]] = None,
    ) -> Dict[str, Any]:
        """
        Send a chat message with company context
        
        Args:
            user_message: The user's message
            company_context: Full company data object
            conversation_history: Previous messages in format [{"role": "user|assistant", "content": "..."}]
            
        Returns:
            Dict with response and metadata
        """
        try:
            # Get access token
            access_token = self.get_access_token()

            # Build system prompt with company context
            company_name = company_context.get("companyInfo", {}).get(
                "displayName", "this company"
            )
            
            # Convert company context to JSON string for the AI
            import json
            company_json = json.dumps(company_context, indent=2)

            system_prompt = f"""You are Eia, an AI sales assistant for UPS. You have detailed information about {company_name}.

COMPLETE COMPANY DATA:
{company_json}

Your role is to:
1. Answer questions about the company's business, financials, supply chain, and opportunities using the data provided above
2. Reference specific numbers, dates, and facts from the company data when relevant
3. Help identify UPS service opportunities based on the sales opportunities and insights in the data
4. Be concise, helpful, and professional
5. If asked about data not in the company context, clearly state you don't have that specific information

The company data includes: company info, financials, products, market details, supply chain lanes/facilities, critical insights, sales opportunities, AI sales intelligence, people/contacts, and more.

Always ground your responses in the actual data provided above."""

            # Build messages array
            messages = [{"role": "system", "content": system_prompt}]

            # Add conversation history if provided
            if conversation_history:
                messages.extend(conversation_history[-6:])  # Last 6 messages for context

            # Add current user message
            messages.append({"role": "user", "content": user_message})

            # Prepare API request
            headers = {
                "Authorization": f"Bearer {access_token}",
                "Content-Type": "application/json",
                "Accept": "application/json",
            }

            payload = {
                "model_id": "meta-llama/llama-3-405b-instruct",
                "messages": messages,
                "parameters": {
                    "decoding_method": "greedy",
                    "max_new_tokens": 1000,
                    "temperature": 0.7,
                    "top_p": 0.9,
                },
                "project_id": self.project_id,
            }

            # Make API call
            api_url = f"{self.url}/ml/v1/text/chat?version=2023-05-29"
            response = requests.post(api_url, headers=headers, json=payload, timeout=120)

            # Handle token expiration
            if response.status_code == 401:
                print("Token expired, refreshing...")
                access_token = self.get_access_token(force_refresh=True)
                headers["Authorization"] = f"Bearer {access_token}"
                response = requests.post(
                    api_url, headers=headers, json=payload, timeout=60
                )

            response.raise_for_status()
            result = response.json()

            # Extract response
            if "choices" in result:
                ai_response = result["choices"][0]["message"]["content"]
            else:
                ai_response = result.get("results", [{}])[0].get("generated_text", "")

            return {
                "success": True,
                "response": ai_response.strip(),
                "model": "meta-llama/llama-3-405b-instruct",
            }

        except requests.exceptions.Timeout:
            return {
                "success": False,
                "error": "Request timed out. Please try again.",
            }
        except requests.exceptions.RequestException as e:
            return {
                "success": False,
                "error": f"API request failed: {str(e)}",
            }
        except Exception as e:
            return {
                "success": False,
                "error": f"An error occurred: {str(e)}",
            }

