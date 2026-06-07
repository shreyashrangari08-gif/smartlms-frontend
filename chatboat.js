// Chatbot UI create karna
const chatContainer = document.createElement('div');
chatContainer.id = 'chatbot-container';
chatContainer.innerHTML = `
    <div id="chat-box" style="display:none; position:fixed; bottom:80px; right:20px; width:300px; height:400px; background:white; border:1px solid #ccc; padding:10px; border-radius:10px; z-index:1000; box-shadow: 0 4px 10px rgba(0,0,0,0.1);">
        <input type="text" id="user-input" placeholder="Ask AI..." style="width:100%; padding:5px;">
        <button onclick="sendToAI()" style="width:100%; margin-top:5px; background:#3b82f6; color:white; border:none; padding:5px;">Send</button>
        <div id="chat-history" style="height:300px; overflow-y:auto; margin-top:10px; border-top:1px solid #eee;"></div>
    </div>
    <button onclick="toggleChat()" style="position:fixed; bottom:20px; right:20px; z-index:1001; padding:10px 20px; background:#3b82f6; color:white; border:none; border-radius:20px; cursor:pointer;">AI Assistant</button>
`;
document.body.appendChild(chatContainer);

function toggleChat() {
    const box = document.getElementById('chat-box');
    box.style.display = box.style.display === 'none' ? 'block' : 'none';
}

async function sendToAI() {
    const input = document.getElementById('user-input').value;
    const history = document.getElementById('chat-history');
    if (!input) return;

    history.innerHTML += `<p><b>You:</b> ${input}</p>`;
    document.getElementById('user-input').value = '';

    try {
        // Yahan apna wo URL dalein jo aapko Render se mila hai
        const response = await fetch('https://YOUR_RENDER_BACKEND_URL.onrender.com/chat', { 
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ prompt: input })
        });
        const data = await response.json();
        history.innerHTML += `<p><b>AI:</b> ${data.reply}</p>`;
    } catch (error) {
        history.innerHTML += `<p style="color:red;">AI Error: Server se connect nahi ho paya.</p>`;
    }
}
