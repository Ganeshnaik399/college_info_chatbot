from flask import Flask, request, jsonify
from flask_cors import CORS
import requests
import os

app = Flask(__name__)
CORS(app)  # allow frontend connection

# OPTION 1: Using OpenAI API (Recommended)
OPENAI_API_KEY = "your_api_key_here"

def get_ai_response(user_message):
    url = "https://api.openai.com/v1/chat/completions"

    headers = {
        "Authorization": f"Bearer {OPENAI_API_KEY}",
        "Content-Type": "application/json"
    }

    data = {
        "model": "gpt-4o-mini",  # fast & cheap
        "messages": [
            {"role": "system", "content": "You are a helpful college assistant."},
            {"role": "user", "content": user_message}
        ]
    }

    response = requests.post(url, headers=headers, json=data)
    result = response.json()

    return result['choices'][0]['message']['content']


#API ROUTE
@app.route('/chat', methods=['POST'])
def chat():
    user_message = request.json.get("message")

    if not user_message:
        return jsonify({"response": "Please send a message"}), 400

    try:
        reply = get_ai_response(user_message)
        return jsonify({"response": reply})

    except Exception as e:
        return jsonify({"response": "Error occurred", "error": str(e)}), 500


# Run server
if __name__ == '__main__':
    app.run(debug=True)