// Chatbot UI create karna
const chatContainer = document.createElement('div');
chatContainer.id = 'chatbot-container';
chatContainer.innerHTML = `
    <div id="chat-box" style="display:none; position:fixed; bottom:80px; right:20px; width:300px; height:400px; background:white; border:1px solid #ccc; padding:10px;">
        <input type="text" id="user-input" placeholder="Ask AI...">
        <button onclick="sendToAI()">Send</button>
        <div id="chat-history"></div>
    </div>
    <button onclick="toggleChat()" style="position:fixed; bottom:20px; right:20px;">AI Chat</button>
`;
document.body.appendChild(chatContainer);

function toggleChat() {
    const box = document.getElementById('chat-box');
    box.style.display = box.style.display === 'none' ? 'block' : 'none';
}

async function sendToAI() {
    const input = document.getElementById('user-input').value;
    const response = await fetch('http://localhost:5000/chat', { // Backend URL
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ prompt: input })
    });
    const data = await response.json();
    document.getElementById('chat-history').innerHTML += `<p>AI: ${data.reply}</p>`;
}
