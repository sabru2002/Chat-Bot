const sendBtn = document.getElementById("sendBtn");
const userInput = document.getElementById("userInput");
const chatBox = document.getElementById("chatBox");

sendBtn.onclick = function () {
    const message = userInput.value.trim();

    if (message === "") {
        return;
    }

    // Show user message
    addMessage(message, "user-message");

    // Clear input
    userInput.value = "";

    // Bot response
    setTimeout(() => {
        const botReply = getBotResponse(message);
        addMessage(botReply, "bot-message");
    }, 500);
};

function addMessage(message, sender) {
    const messageDiv = document.createElement("div");

    messageDiv.classList.add("message", sender);
    messageDiv.textContent = message;

    chatBox.appendChild(messageDiv);

    chatBox.scrollTop = chatBox.scrollHeight;
}

function getBotResponse(message) {
    message = message.toLowerCase();

    if (message.includes("sarbjit") || message.includes("hi")) {
        return "i hate u";
    }

    if (message.includes("srbjitwaaa")) {
        return "I love u";
    }

    if (message.includes("she: aaj chest pain kr rha hai")) {
        return " doctor: to  itna   Db....ti   q  Ho ";
    }

    if (message.includes("javascript")) {
        return "JavaScript is a programming language used to make websites interactive.";
    }

    if (message.includes("html")) {
        return "HTML is used to create the structure of a webpage.";
    }

    if (message.includes("css")) {
        return "CSS is used to style and design webpages.";
    }

    if (message.includes("bye")) {
        return "Goodbye! Have a great day!";
    }

    return "Sorry, I don't understand that yet. Please ask me something else.";
}