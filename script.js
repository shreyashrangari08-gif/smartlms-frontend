function showForgot() {
    document.getElementById('login-form').style.display = 'none';
    document.getElementById('forgot-form').style.display = 'block';
}

function showLogin() {
    document.getElementById('login-form').style.display = 'block';
    document.getElementById('forgot-form').style.display = 'none';
}

function checkLogin() {
    let email = document.getElementById('email').value;
    let pass = document.getElementById('password').value;
    if(email === "shreyashrangari08@gmail.com" && pass === "Shreyash123") {
        window.location.href = 'courses.html';
    } else {
        alert("Invalid Details!");
    }
}
