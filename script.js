async function submitAuth(type) {
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;

    try {
        const response = await fetch(`https://lms-backrnd.onrender.com/${type}`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username, email })
        });

        // Poora data text ki tarah lo
        const rawData = await response.text();
        
        // Screen par dikhao ki backend se kya aaya
        document.getElementById('message').innerText = "Backend Response: " + rawData;
    } catch (error) {
        document.getElementById('message').innerText = "Network Error.";
    }
}
