// Login Logic
function checkLogin() {
    let email = document.getElementById('email').value;
    let pass = document.getElementById('password').value;
    if(email === "shreyashrangari08@gmail.com" && pass === "Shreyash123") {
        window.location.href = 'courses.html';
    } else {
        alert("Invalid Login!");
    }
}

// Quiz Logic
function loadQuestions() {
    let questions = ["Q1?", "Q2?", "Q3?", "Q4?", "Q5?", "Q6?", "Q7?", "Q8?", "Q9?", "Q10?"];
    let html = "";
    questions.forEach((q, i) => {
        html += `<p>${q}</p><input type="text" id="a${i}" style="width:100%; margin-bottom:10px;">`;
    });
    document.getElementById('questions-list').innerHTML = html;
}

function calculateResult() {
    // Yahan apna scoring logic daalo
    document.getElementById('result-display').innerHTML = "Your Percentage: 100%";
}

if(window.location.pathname.includes("courses.html")) window.onload = loadQuestions;
