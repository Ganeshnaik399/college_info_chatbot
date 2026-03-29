# College Info Chatbot  

A modern, interactive chatbot designed to provide information about a college — its courses, timings, faculty, placements, internships, and much more.  
Built with **HTML, CSS, and JavaScript**,**flask backend** this chatbot gives a user-friendly interface for students to quickly get answers about the college.  

---

## Features  

- Interactive chatbot UI
- Voice input using browser speech recognition
-Dynamic AI responses using OpenAI API
-Static fallback responses when API is not available
-Quick action buttons for common queries
-Smooth animations and typing effects
-REST API-based backend communication
-Easy to extend and customize

---

##  Technologies Used  

Tech Stack
Frontend
HTML
CSS
JavaScript
Backend
Python
Flask
Flask-CORS
AI Integration
OpenAI API (mandatory for dynamic responses)
##Important Note

The OpenAI API is mandatory for generating dynamic responses.

Currently, there is no active API subscription configured in this project. Because of this, the chatbot runs using static predefined responses.

To enable full functionality, you must provide a valid OpenAI API key.
##Screenshot
<img width="1623" height="855" alt="Screenshot 2025-09-11 163247" src="https://github.com/user-attachments/assets/899e381a-e9b5-4177-b98f-159087dce588" />
## Responsive Design
<img width="581" height="922" alt="Screenshot 2025-09-11 164045" src="https://github.com/user-attachments/assets/ecf1c2b7-4bb1-4a71-bed1-c9df83d3a9ac" />

##  How to Use  

1. Clone the repository:  
   ```bash
  Installation and Setup
Step 1: Clone the Repository
git clone https://github.com/your-username/college-chatbot.git
cd college-chatbot
Step 2: Install Backend Dependencies
pip install flask flask-cors requests
Step 3: Configure OpenAI API

Open the backend file (app.py) and replace:

OPENAI_API_KEY = "your_api_key_here"

with your actual API key.

Step 4: Run the Backend Server
python app.py

The server will start at:
http://127.0.0.1:5000

Step 5: Run the Frontend

Open the index.html file in your browser.
--- bash
## Project Structure
college-chatbot/
│
├── index.html
├── style.css
├── script.js
├── app.py
└── README.md
API Endpoint
POST /chat
Request Body
{
  "message": "Your question here"
}
Response
{
  "response": "Chatbot reply"
}
---
---bash
## Future Improvements
-Add database for chat history
-Implement user authentication
-Add context-aware conversations
-Integrate PDF/document-based Q&A
-Deploy application to cloud platforms
-Improve UI with modern frameworks
---
##Conclusion
This project demonstrates a complete full stack chatbot application with AI integration. It is suitable for learning, experimentation, and as a strong resume project showcasing frontend, backend, and AI capabilities.
Contact
Created by: L.ganesh Naik
GitHub: https://github.com/ganeshnaik399
Email: ganeshnaiklavoodya2004@gmail.com
