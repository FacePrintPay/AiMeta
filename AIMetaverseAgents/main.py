from fastapi import FastAPI
from pydantic import BaseModel
import uvicorn

app = FastAPI(title="AI Metaverse Agents")

class ChatRequest(BaseModel):
    message: str
    agent_type: str = "general"

@app.get("/")
async def root():
    return {"message": "AI Metaverse Agents API", "version": "1.0.0"}

@app.get("/agents")
async def get_agents():
    return [
        {"id": "alpha", "name": "Assistant Alpha", "type": "general", "status": "online"},
        {"id": "beta", "name": "Creative Beta", "type": "creative", "status": "online"},
        {"id": "gamma", "name": "Tech Gamma", "type": "technical", "status": "online"}
    ]

@app.post("/chat")
async def chat(request: ChatRequest):
    return {
        "agent": request.agent_type,
        "response": f"Hello! I received your message: {request.message}",
        "timestamp": "2024-01-01T00:00:00Z"
    }

if __name__ == "__main__":
    uvicorn.run(app, host="0.0.0.0", port=8002)
