async function submitAuth(type) {
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;

    try {
        const response = await fetch(`https://lms-backrnd.onrender.com/${type}`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username, email })
        });

        const data = await response.json();
        // UI par success message dikha do
        document.getElementById('message').innerText = data.message;
    } catch (error) {
        document.getElementById('message').innerText = "Error: Backend se connection fail hua.";
    }
}
