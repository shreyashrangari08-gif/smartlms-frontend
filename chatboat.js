// chatbot.js
async function sendToAI() {
    const input = document.getElementById('user-input').value;
    const history = document.getElementById('chat-history');
    if (!input) return;

    history.innerHTML += `<p><b>You:</b> ${input}</p>`;
    document.getElementById('user-input').value = '';

    try {
        // Ye aapke Render backend URL ko point karega
        const response = await fetch("https://lms-backrnd.onrender.com/chat", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ prompt: input })
        });

        const data = await response.json();
        history.innerHTML += `<p style="color:#3b82f6;"><b>AI:</b> ${data.reply}</p>`;
    } catch (error) {
        history.innerHTML += `<p style="color:red;">Error: AI connection failed.</p>`;
    }
}
