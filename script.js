const correctAnswers = ["a", "b", "c", "a", "b", "c", "a", "b", "c", "a"]; // 10 sahi jawab

function loadQuestions() {
    let html = "";
    for(let i=1; i<=10; i++) {
        html += `<p>${i}. Sawal yahan likho?</p>
                 <input type="text" name="q${i}" class="q-input" placeholder="Enter answer a, b, or c">`;
    }
    document.getElementById('questions-list').innerHTML = html;
}

function calculateResult() {
    let score = 0;
    for(let i=1; i<=10; i++) {
        let val = document.getElementsByName(`q${i}`)[0].value.toLowerCase();
        if(val === correctAnswers[i-1]) score++;
    }
    let percentage = (score / 10) * 100;
    document.getElementById('result-display').innerHTML = `Your Score: ${percentage}%`;
}

// Page load hote hi sawal load honge
loadQuestions();
