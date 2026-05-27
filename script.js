
const API_URL = "https://lms-backrnd.onrender.com";

async function fetchData() {
    try {
        const response = await fetch(`${API_URL}/`);
        const data = await response.text();
        document.getElementById('data-container').innerText = data;
    } catch (error) {
        console.error("Error:", error);
    }
}

fetchData();
