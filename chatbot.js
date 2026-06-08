// Chatbot UI create karna
const chatContainer = document.createElement('div');
chatContainer.innerHTML = `
    <div id="chat-box" style="display:none; position:fixed; bottom:80px; right:20px; width:300px; height:400px; background:white; border:1px solid #ccc; padding:10px; z-index:9999;">
        <h4>AI Assistant</h4>
        <div id="chat-history" style="height:250px; overflow-y:auto; border-bottom:1px solid #eee;"></div>
        <input type="text" id="user-input" placeholder="Ask AI..." style="width:100%;">
        <button onclick="sendToAI()" style="width:100%; margin-top:5px;">Send</button>
    </div>
    <button onclick="toggleChat()" style="position:fixed; bottom:20px; right:20px; z-index:9999;">Chat</button>
`;
document.body.appendChild(chatContainer);

function toggleChat() {
    const box = document.getElementById('chat-box');
    box.style.display = box.style.display === 'none' ? 'block' : 'none';
}

// AI function
async function sendToAI() {
    const input = document.getElementById('user-input').value;
    const history = document.getElementById('chat-history');
    if (!input) return;

    history.innerHTML += `<p><b>You:</b> ${input}</p>`;
    document.getElementById('user-input').value = '';

    try {
        const response = await fetch("https://lms-backrnd.onrender.com/chat", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ prompt: input })
        });
        const data = await response.json();
        history.innerHTML += `<p style="color:blue;"><b>AI:</b> ${data.reply}</p>`;
    } catch (error) {
        history.innerHTML += `<p style="color:red;">Error!</p>`;
    }
}
