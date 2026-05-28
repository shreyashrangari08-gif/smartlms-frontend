function loadQuestions() {
    let questions = [
        "1. Data analysis ka pehla step kya hai?",
        "2. SQL mein data filter kaise karte hain?",
        "3. Table join karne ka command kya hai?",
        "4. Aggregation function kaunsa hai?",
        "5. Visualization ke liye best tool?",
        "6. Primary key ka kya kaam hai?",
        "7. Null value ka matlab kya hai?",
        "8. Data cleaning kyu zaruri hai?",
        "9. Dashboard ka purpose kya hai?",
        "10. Final report kaise banate hain?"
    ];
    
    let html = "";
    for(let i=0; i<questions.length; i++) {
        html += `<p>${questions[i]}</p>
                 <input type="text" id="ans${i}" style="width:100%; margin-bottom:15px; padding:8px;">`;
    }
    document.getElementById('questions-list').innerHTML = html;
}

window.onload = loadQuestions;
