# Code Assistant for Bug Explanation

This project is a **Code Bug Explanation Assistant** that helps beginner programmers understand the errors in their code. Users can paste their code into the app, and the software will use OpenAI's GPT-4 model to explain the errors and suggest fixes.

### Features
- **Code Input**: Users can paste their code into a text area.
- **Bug Explanation**: The tool sends the code to OpenAI's GPT-4 model, which explains the errors.
- **Error Suggestion**: The model provides potential fixes for the bugs detected.

### Tech Stack
- **Frontend**: Vue.js for the user interface.
- **Backend**: Node.js to handle requests and interact with OpenAI API.
- **LLM**: OpenAI GPT-4 for explaining bugs in code.

---

## Prerequisites

Before running the project, make sure you have the following installed:

- **Node.js**: Required for both backend and frontend.
- **Vue.js**: Required for the frontend.
- **OpenAI API Key**: You need to sign up for an OpenAI account and get an API key.

---

## Setup Instructions

### 1. Frontend Setup (Vue.js)

1. Install Vue CLI globally (if not already installed):
   ```bash
   npm install -g @vue/cli
