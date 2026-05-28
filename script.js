function loadQuiz() {
    let quizDiv = document.getElementById('quiz-section');
    let html = "";
    for(let i=0; i<10; i++) {
        html += `<p>${i+1}. Sawal yahan...</p><input type="text" id="q${i}" style="width:100%; padding:8px; margin-bottom:10px;">`;
    }
    quizDiv.innerHTML = html;
}

function checkAssessment() {
    let score = 0;
    // Yahan tum logic laga sakte ho
    document.getElementById('grade-display').innerHTML = "Assessment Submitted! Grade: A";
}

window.onload = loadQuiz;
