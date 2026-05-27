async function submitAuth(type) {
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;

    try {
        const response = await fetch(`https://lms-backrnd.onrender.com/${type}`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username, email })
        });

        // Poora response text format mein lo pehle
        const rawData = await response.text();
        console.log("Backend se mila data:", rawData); // Ye console mein dikhega

        // Ab try karo ki wo JSON hai ya nahi
        try {
            const jsonData = JSON.parse(rawData);
            document.getElementById('message').innerText = jsonData.message || "Message property nahi mili";
        } catch (e) {
            // Agar JSON nahi hai, toh seedha text dikha do
            document.getElementById('message').innerText = rawData;
        }

    } catch (error) {
        document.getElementById('message').innerText = "Error: Connection fail.";
    }
}
