function loadQuestions() {
    let questions = [
        "Data ka matlab kya hai?",
        "SQL kya hota hai?",
        "Visualization kyu zaruri hai?",
        "Database kya hai?",
        "Query kaise likhte hain?",
        "Table kaise join karein?",
        "Dashboard kya hota hai?",
        "Data cleaning kya hai?",
        "Aggregates kya hote hain?",
        "Final step kya hai?"
    ];
    
    let html = "";
    for(let i=0; i<10; i++) {
        html += `<p>${i+1}. ${questions[i]}</p>
                 <input type="text" id="q${i}" style="width:100%; margin-bottom:10px;">`;
    }
    document.getElementById('questions-list').innerHTML = html;
}

// Page load hote hi loadQuestions() call karo
window.onload = loadQuestions;
