async function submitAuth(type) {
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const messageDiv = document.getElementById('message');

    try {
        const response = await fetch(`https://lms-backrnd.onrender.com/${type}`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username, email })
        });
        const data = await response.json();
        
        messageDiv.innerText = data.message;

        if (response.ok && type === 'login') {
            alert("Login Successful! Redirecting...");
            window.location.href = "courses.html"; 
        }
    } catch (err) {
        messageDiv.innerText = "Error: " + err.message;
    }
}
