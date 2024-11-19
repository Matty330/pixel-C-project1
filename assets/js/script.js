const fortune = [
    "You will have a great day!",
    "You are in for a big surprise!",
    "Your future is filled with uncertainty!",
    "It is time to choose a new path!",
    "Keep those you love close!"
];

const getRandomFortune = () => {
    const randomIndex = Math.floor(Math.random() * fortune.length);
    return fortune[randomIndex];
}

document.getElementById('getFortune').addEventListener('click', () => {
    const fortuneMessage = getRandomFortune();
    document.getElementById('fortuneDisplay').innerText = fortuneMessage;
    addFortune(fortuneMessage);
});

const changeLanguage = () => {
    const languageSelect = document.getElementById('language-select');
    const title = document.getElementById('title');
    const results = document.getElementById('getFortune'); 

    switch (languageSelect.value) {
        case 'english':
            title.textContent = 'Crack the Fortune Cookie';
            results.textContent = 'Crack the Cookie';
            break;
        case 'spanish':
            title.textContent = 'Rompe la galleta de la fortuna'; 
            results.textContent = 'Romper la galleta'; 
            break;
        case 'french':
            title.textContent = 'Cassez le Fortune Cookie'; 
            results.textContent = 'Cassez le Cookie'; 
            break;
        default:
            title.textContent = 'Crack the Fortune Cookie'; 
    }
}

// Language functions
function setLanguage(language) {
    localStorage.setItem('selectedLanguage', language);
    changeLanguage(); // Apply the language change immediately
}

function getLanguage() {
    return localStorage.getItem('selectedLanguage') || 'english'; // Default to English
}

// Fortune functions
function addFortune(fortune) {
    let fortunes = JSON.parse(localStorage.getItem('fortuneHistory')) || [];
    fortunes.push(fortune);
    localStorage.setItem('fortuneHistory', JSON.stringify(fortunes));
}

function getFortuneHistory() {
    return JSON.parse(localStorage.getItem('fortuneHistory')) || [];
}

// Event listeners
document.getElementById('languageSelector').addEventListener('change', function() {
    setLanguage(this.value);
});

document.getElementById('generateFortune').addEventListener('click', function() {
    const fortuneMessage = getRandomFortune();
    document.getElementById('fortuneDisplay').innerText = fortuneMessage;
    addFortune(fortuneMessage);
});

// Load initial settings
document.getElementById('languageSelector').value = getLanguage();
changeLanguage(); // Apply the language on page load