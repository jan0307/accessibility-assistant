from flask import Flask, render_template, request, jsonify
from dotenv import load_dotenv
from google import genai
load_dotenv()

client = genai.Client()



app = Flask(__name__)

@app.route("/")
def home():
    return render_template("index.html")

@app.route("/ask-ai", methods=["POST"])
def ask_ai():
    data = request.get_json()
    question = data.get("question")
    try:

        interaction = client.interactions.create(
            model="gemini-3.6-flash",
            input="Answer in 3 to 5 short sentences. Use simple language and no Markdown. Question: " + question
        )

        return jsonify({"answer": interaction.output_text})
    except Exception:
        return jsonify({
            "answer": "AI is temporarily unavailable. Please try again shortly."
        }), 503
if __name__ == "__main__":
    app.run(debug=True)