const correctAnswers = ["a", "b", "c", "a", "b", "c", "a", "b", "c", "a"]; // Apne sahi jawab yahan daal do

function loadQuiz() {
    let quizDiv = document.getElementById('quiz-section');
    let html = "";
    for(let i=0; i<10; i++) {
        html += `<p>${i+1}. Sawal yahan...</p>
                 <input type="text" id="q${i}" style="width:100%; margin-bottom:10px;">`;
    }
    quizDiv.innerHTML = html;
}

function checkAssessment() {
    let score = 0;
    for(let i=0; i<10; i++) {
        let ans = document.getElementById(`q${i}`).value.toLowerCase();
        if(ans === correctAnswers[i]) score++;
    }
    
    let grade = (score >= 8) ? "Grade: A (Pass)" : (score >= 5) ? "Grade: B (Average)" : "Grade: F (Fail)";
    document.getElementById('grade-display').innerHTML = `Score: ${score}/10 - ${grade}`;
}

window.onload = loadQuiz;
