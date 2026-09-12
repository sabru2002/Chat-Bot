# AI Chatbot

An AI-powered chatbot application that allows users to interact with a chatbot through a simple and user-friendly interface. The project is designed to provide intelligent responses and retrieve information from a database using natural language queries.

## Features

* Interactive chatbot interface
* User-friendly chat experience
* AI-generated responses
* Database integration for retrieving information
* Natural language-based queries
* Responsive web design

## Technologies Used

* HTML
* CSS
* JavaScript
* Node.js
* SQL / MySQL
* Gemini API

## How It Works

1. The user enters a question in the chat interface.
2. The application sends the question to the backend.
3. The AI processes the question and generates a response.
4. If the question requires database information, the application retrieves the relevant data.
5. The response is displayed in the chat interface.

## Project Structure

```text
AI-Chatbot/
│
├── index.html
├── style.css
├── script.js
├── server.js
├── package.json
└── README.md
```

> Update the file names above according to your actual project structure.

## Installation and Setup

### 1. Clone the repository

```bash
git clone https://github.com/your-username/your-repository-name.git
```

### 2. Open the project folder

```bash
cd your-repository-name
```

### 3. Install dependencies

```bash
npm install
```

### 4. Configure environment variables

Create a `.env` file and add your API key and database details.

```env
GEMINI_API_KEY=your_api_key
DB_HOST=localhost
DB_USER=your_username
DB_PASSWORD=your_password
DB_NAME=your_database
```

**Do not upload your `.env` file or API keys to GitHub.**

### 5. Start the application

```bash
node server.js
```

Open the application in your browser using the local URL shown in your terminal.

## Future Improvements

* Add voice input and voice output
* Improve chatbot accuracy
* Add user authentication
* Support more database queries
* Deploy the application online

## Author

**Sarbjit Prasad**

B.Tech Computer Science and Engineering

## License

This project is created for learning and educational purposes.
