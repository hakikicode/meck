document.getElementById('ai-send').addEventListener('click', function() {
    const input = document.getElementById('ai-input').value;
    if (input.trim() !== "") {
        addMessageToChat("You: " + input, 'user');
        handleAiResponse(input);
        document.getElementById('ai-input').value = ""; // Clear input
    }
});

function addMessageToChat(message, sender) {
    const chatHistory = document.getElementById('chat-history');
    const messageElement = document.createElement('div');
    messageElement.textContent = message;
    messageElement.className = sender === 'user' ? 'user-message' : 'ai-message';
    chatHistory.appendChild(messageElement);
    chatHistory.scrollTop = chatHistory.scrollHeight; // Scroll to bottom
}

function handleAiResponse(userInput) {
    // Dummy AI response for common health-related questions
    let aiResponse = "";
    if (userInput.toLowerCase().includes("fever")) {
        aiResponse = "AI: It seems like you might have a fever. Stay hydrated and monitor your temperature. For further advice, please consult a doctor.";
    } else if (userInput.toLowerCase().includes("headache")) {
        aiResponse = "AI: Headaches can be caused by many things like stress, dehydration, or lack of sleep. Try resting, and if it persists, consult a healthcare professional.";
    } else {
        aiResponse = "AI: I'm here to help with health questions. For personalized advice, please log in or sign up.";
    }
    
    addMessageToChat(aiResponse, 'ai');

    // Simulate prompt to log in for further interaction
    setTimeout(function() {
        addMessageToChat("AI: For more personalized advice, please sign up or log in.", 'ai');
    }, 1000);
}
