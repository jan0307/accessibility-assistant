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



   ## Testing

The application was manually tested to verify that the main accessibility and AI features work correctly.

| Test | Expected Result | Result |
|---|---|---|
| Large Text | Text size increases | Passed |
| High Contrast | Background becomes black and text remains visible | Passed |
| Color Vision Mode | Alternative colors are applied correctly | Passed |
| Reset | Page returns to its original appearance | Passed |
| AI question | Gemini returns a short accessibility-related answer | Passed |
| Empty AI question | User is asked to enter a question | Passed |
| AI API error | A user-friendly error message is displayed | Passed |


## Problems and Solutions

### High Contrast Mode
The high contrast mode initially made some content difficult to see. The JavaScript was updated so the content uses a black background and white text.

### Gemini Model Error
The original Gemini model returned a 404 error because it was no longer available. The application was updated to use `gemini-3.6-flash`.

### Gemini Rate Limit
The Gemini API returned a 429 error when the request limit was reached. Error handling with `try` and `except` was added so the user receives a clear message instead of an application error.


## Reverse Engineering Process

The project was created by studying a finished Accessibility Assistant application and working backwards to understand how it could have been built.

### Step 1 – Look at the Application
I examined the finished application and identified its main features: Large Text, High Contrast, Color Vision Mode, Reset, and an AI accessibility assistant.

### Step 2 – Ask Questions
I considered what technologies and logic could create these features. I identified HTML, CSS, JavaScript, Python, Flask, and GenAI as suitable technologies.

### Step 3 – Guess the Inputs
The main inputs are the accessibility buttons and the question entered by the user in the AI text area.

### Step 4 – Guess the Process
The accessibility buttons use JavaScript to change the appearance of the page. AI questions are sent from JavaScript to the Flask backend, which sends the question to Gemini and returns the answer to the web page.

### Step 5 – Sketch the Logic

    def accessibility_mode(mode):
        if mode == "large-text":
            increase_text_size()
        elif mode == "high-contrast":
            change_contrast()

### Step 6 – Build and Test
I recreated the application and tested the accessibility modes, reset function, AI questions, empty input validation, and AI error handling.

