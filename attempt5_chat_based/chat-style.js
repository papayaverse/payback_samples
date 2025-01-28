// chat-style.js

document.addEventListener("DOMContentLoaded", () => {
    const chatBody = document.getElementById("chatBody");
    const userInput = document.getElementById("userInput");
    const sendButton = document.getElementById("sendButton");
  
    const steps = [
      "Welcome to Agent Papaya! Let's set your cookie preferences. Do you want to reject all unnecessary cookies? (yes/no)",
      "Great! Now, do you want to share your data anonymously or with your identity (de-anonymized)?",
      "Who would you like to share your data with? (e.g., advertisers, retailers, research organizations)",
      "What purposes can your data be used for? (e.g., ads, product recommendations, market research)",
      "Thanks! Your preferences have been saved. You can view them in the dashboard."
    ];
  
    let stepIndex = 0;
  
    function addMessage(content, isUser = false) {
      const message = document.createElement("div");
      message.classList.add("chat-message", isUser ? "user-message" : "agent-message");
      message.textContent = content;
      chatBody.appendChild(message);
      chatBody.scrollTop = chatBody.scrollHeight; // Auto-scroll to the bottom
    }
  
    function handleResponse(response) {
      if (stepIndex < steps.length - 1) {
        stepIndex++;
        addMessage(steps[stepIndex]);
      } else {
        addMessage("Conversation complete! Preferences saved.", false);
      }
    }
  
    sendButton.addEventListener("click", () => {
      const response = userInput.value.trim();
      if (response) {
        addMessage(response, true);
        userInput.value = "";
        handleResponse(response);
      }
    });
  
    // Initialize conversation
    addMessage(steps[0]);
  });
  