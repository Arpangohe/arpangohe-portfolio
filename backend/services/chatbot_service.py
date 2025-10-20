import os
from openai import OpenAI
from typing import List, Dict
import logging

logger = logging.getLogger(__name__)

class ChatbotService:
    def __init__(self):
        self.client = None
        self.system_prompt = """You are Arpan Gohe's AI assistant on his portfolio website. You help visitors learn about Arpan's services and expertise.

ABOUT ARPAN:
- Founder of TechRooot Technology (EdTech venture, trained 1,500+ students)
- AI Strategist with 3+ years experience in LLM training, prompt engineering, data annotation
- Full-Stack Developer (MERN Stack, Next.js, Python, AI-integrated applications)
- Digital Marketing Expert (SEO, LinkedIn Growth Hacking, Personal Branding)
- Based in Bhopal, India (open to remote work and relocation)

SERVICES & PRICING:
1. AI & Automation Solutions - $50/hour
   - LLM training & prompt engineering
   - Custom AI model development
   - Data annotation & quality assurance
   - AI-powered business automation
   
2. Full-Stack Development - $40/hour
   - MERN Stack applications
   - Next.js enterprise solutions
   - AI-integrated web platforms
   - E-commerce & SaaS Development
   
3. Digital Marketing & Growth - $35/hour
   - LinkedIn growth hacking
   - SEO & performance marketing
   - Personal branding for CEOs
   - Content strategy & automation

KEY PROJECTS:
- TechRooot AI Platform: EdTech platform serving 1,500+ students, $10,000+ revenue
- Smart Traffic Management System: AI-driven 25% congestion reduction
- CabRoot Booking Platform: Full-stack cab booking with real-time tracking
- Enterprise E-commerce Platform: Multi-vendor marketplace with AI recommendations

PROJECT APPROACH:
- Discovery call to understand requirements
- Detailed proposal with timeline & budget
- Agile development with weekly updates
- Post-launch support included

CONTACT:
Email: arpangohework@gmail.com
Phone/WhatsApp: +91-896-242-7126
Location: Bhopal, India

When asked about availability, say: "Arpan is currently accepting new projects. Would you like to book a consultation call or send a project inquiry?"

Be professional, friendly, and concise. Keep responses under 100 words unless asked for detailed explanations. If asked technical questions beyond this scope, suggest contacting Arpan directly. Always encourage visitors to fill out the contact form or book a call."""

    def _get_client(self):
        """Lazy initialization of OpenAI client"""
        if self.client is None:
            api_key = os.environ.get('OPENAI_API_KEY')
            if api_key:
                self.client = OpenAI(api_key=api_key)
            else:
                logger.warning("OpenAI API key not found")
        return self.client

    async def get_response(self, user_message: str, conversation_history: List[Dict] = None) -> str:
        """Get AI chatbot response using OpenAI"""
        try:
            client = self._get_client()
            if not client:
                return "I apologize, but I'm having trouble processing your request right now. Please try contacting Arpan directly at arpangohework@gmail.com or +91-896-242-7126."
            
            messages = [{"role": "system", "content": self.system_prompt}]
            
            # Add conversation history if provided
            if conversation_history:
                messages.extend(conversation_history[-6:])  # Keep last 6 messages for context
            
            # Add current user message
            messages.append({"role": "user", "content": user_message})
            
            # Get response from OpenAI
            response = client.chat.completions.create(
                model="gpt-4o-mini",
                messages=messages,
                max_tokens=200,
                temperature=0.7,
                top_p=0.9
            )
            
            reply = response.choices[0].message.content.strip()
            logger.info(f"Chatbot response generated successfully")
            return reply
            
        except Exception as e:
            logger.error(f"Chatbot error: {str(e)}")
            return "I apologize, but I'm having trouble processing your request right now. Please try contacting Arpan directly at arpangohework@gmail.com or +91-896-242-7126."
    
    def get_suggested_questions(self) -> List[str]:
        """Get suggested quick questions for users"""
        return [
            "What services does Arpan offer?",
            "What are the pricing rates?",
            "How can I hire Arpan?",
            "Tell me about TechRooot Technology",
            "What's Arpan's experience with AI?",
            "Can Arpan work remotely?"
        ]

# Singleton instance
chatbot_service = ChatbotService()
