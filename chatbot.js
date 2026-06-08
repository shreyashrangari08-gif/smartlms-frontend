// Secure Chatbot Code
async function sendToAI() {
    const input = document.getElementById('user-input').value;
    const history = document.getElementById('chat-history');
    if (!input) return;

    history.innerHTML += `<p><b>You:</b> ${input}</p>`;
    document.getElementById('user-input').value = '';

    try {
        // Yeh request aapke secure Render backend par jayegi
        const response = await fetch("https://lms-backrnd.onrender.com/chat", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ prompt: input }) // Server.js mein 'prompt' use ho raha hai
        });

        const data = await response.json();
        history.innerHTML += `<p style="color:#3b82f6;"><b>AI:</b> ${data.reply}</p>`;
    } catch (error) {
        history.innerHTML += `<p style="color:red;">Error: AI connection failed.</p>`;
    }
}
