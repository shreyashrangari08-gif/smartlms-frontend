async function submitAuth(type) {
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const msgDiv = document.getElementById('message');

    msgDiv.innerText = "Loading...";

    try {
        const response = await fetch(`https://lms-backrnd.onrender.com/${type}`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username, email })
        });

        const data = await response.json();
        msgDiv.innerText = data.message || "Something went wrong!";
    } catch (error) {
        msgDiv.innerText = "Server Error: Backend se connect nahi ho raha.";
    }
}
