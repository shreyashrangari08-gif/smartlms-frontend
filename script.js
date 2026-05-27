async function submitAuth(type) {
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;

    const response = await fetch(`https://lms-backrnd.onrender.com/${type}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, email })
    });

    const data = await response.json();
    document.getElementById('message').innerText = data.message;
}
