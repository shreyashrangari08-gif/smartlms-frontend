// 1. Chatbot UI ko HTML mein inject karna
const chatContainer = document.createElement('div');
chatContainer.id = 'chatbot-container';
chatContainer.innerHTML = `
    <div id="chat-box" style="display:none; position:fixed; bottom:80px; right:20px; width:300px; height:400px; background:white; border:1px solid #ccc; padding:15px; border-radius:12px; z-index:9999; box-shadow: 0 5px 15px rgba(0,0,0,0.2);">
        <h4 style="margin-top:0;">AI Assistant</h4>
        <div id="chat-history" style="height:250px; overflow-y:auto; margin-bottom:10px; border-bottom:1px solid #eee; font-size:14px;"></div>
        <input type="text" id="user-input" placeholder="Ask AI..." style="width:100%; padding:8px; border:1px solid #ccc; border-radius:4px;">
        <button onclick="sendToAI()" style="width:100%; margin-top:8px; background:#3b82f6; color:white; border:none; padding:8px; border-radius:4px; cursor:pointer;">Send</button>
    </div>
    <button onclick="toggleChat()" style="position:fixed; bottom:20px; right:20px; z-index:9999; padding:12px 20px; background:#3b82f6; color:white; border:none; border-radius:30px; cursor:pointer; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">AI Chat</button>
`;
document.body.appendChild(chatContainer);

// 2. Chat window kholne/band karne ka function
function toggleChat() {
    const box = document.getElementById('chat-box');
    box.style.display = box.style.display === 'none' ? 'block' : 'none';
}

// 3. Backend se AI response lene ka function
async function sendToAI() {
    const input = document.getElementById('user-input').value;
    const history = document.getElementById('chat-history');
    if (!input) return;

    history.innerHTML += `<p><b>You:</b> ${input}</p>`;
    document.getElementById('user-input').value = '';

    try {
        // Yahan apna Render Backend ka URL use karein
        const response = await fetch('https://lms-backrnd.onrender.com/chat', { 
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ prompt: input })
        });
        const data = await response.json();
        history.innerHTML += `<p style="color: #3b82f6;"><b>AI:</b> ${data.reply}</p>`;
        history.scrollTop = history.scrollHeight; // Scroll to bottom
    } catch (error) {
        history.innerHTML += `<p style="color:red;">Error: Server connection failed.</p>`;
    }
}
