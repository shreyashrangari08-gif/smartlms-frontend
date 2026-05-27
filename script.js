async function submitAuth(type) {
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;

    try {
        const response = await fetch(`https://lms-backrnd.onrender.com/${type}`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username, email })
        });

        // Backend se aaye huye JSON ko parse karo
        const data = await response.json();
        
        // Agar data mein 'message' hai toh wo dikhao, varna poora data stringify karke dikhao
        document.getElementById('message').innerText = data.message || JSON.stringify(data);
    } catch (error) {
        document.getElementById('message').innerText = "Error: Backend se connect nahi ho pa raha.";
    }
}
