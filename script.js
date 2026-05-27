// script.js ka login wala hissa:
.then(response => response.json())
.then(data => {
    if (data.message.includes("Login Successful")) {
        // SUCCESS: Ab agle page par bhejo
        alert("Login Successful! Redirecting...");
        window.location.href = "courses.html"; 
    } else {
        document.getElementById('message').innerText = data.message;
    }
});
