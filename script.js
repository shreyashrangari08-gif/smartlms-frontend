function checkLogin() {
    // Input values get karo
    let email = document.getElementById('email').value;
    let pass = document.getElementById('password').value;

    // Yahan apni login condition check karo
    if(email === "shreyashrangari08@gmail.com" && pass === "Shreyash123") {
        // Redirection
        window.location.href = 'courses.html';
    } else {
        alert("Invalid Email or Password!");
    }
}
