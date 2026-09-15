# Accessibility Assistant

Accessibility Assistant is a web application designed to make web content easier to see, read, and understand.

The application includes accessibility features such as Large Text, High Contrast, and Color Vision Mode. It also includes an AI Accessibility Assistant powered by Google Gemini, where users can ask questions about web accessibility and receive short and simple answers.

## Features

- Large Text – increases the text size to improve readability.
- High Contrast – changes the page to a high-contrast color scheme.
- Color Vision Mode – uses alternative colors to improve visual accessibility.
- Reset – restores the page to its original appearance.
- AI Accessibility Assistant – allows users to ask accessibility-related questions.
- AI error handling – displays a user-friendly message if the AI service is temporarily unavailable.

## Technologies Used

- Python – backend programming language.
- Flask – web framework used to run the application and handle requests.
- HTML – structure of the web page.
- CSS – design and accessibility styling.
- JavaScript – controls the accessibility features and communicates with the backend.
- Google Gemini API – provides the generative AI functionality.
- python-dotenv – loads the Gemini API key securely from the .env file.
- Git and GitHub – version control and project hosting.

## Project Structure

accessibility-assistant/
- app.py – Flask backend and Gemini AI integration.
- templates/
  - index.html – structure and content of the web page.
- static/
  - style.css – design and styling.
  - script.js – accessibility features and AI communication.
- .env – stores the Gemini API key locally and is not uploaded to GitHub.
- .gitignore – prevents sensitive and unnecessary files from being tracked by Git.
- README.md – project documentation.

## How to Run the Project

1. Clone the repository.

2. Create a virtual environment:

   python -m venv venv

3. Activate the virtual environment on Windows:

   .\venv\Scripts\Activate.ps1

4. Install the required packages:

   pip install flask google-genai python-dotenv

5. Create a .env file in the project folder and add:

   GEMINI_API_KEY=your_api_key_here

6. Start the Flask application:

   python app.py

7. Open the application in a browser:

   http://127.0.0.1:5000

   