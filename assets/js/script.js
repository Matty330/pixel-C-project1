
// Modal JS

document.addEventListener("DOMContentLoaded", () => {
    const modal = document.getElementById("pageModal");
    const closeBtn = document.getElementById("closeModal");
    const body = document.body;
    const goFortune = document.getElementById("gotoForturn");

    // Show the modal on page load
    modal.style.display = "flex";
    body.classList.remove("default-bg");
    body.classList.add("modal-bg");

    // Close the modal when the Open My cookie button is clicked
    goFortune.addEventListener("click", () => {
    modal.style.display = "none";
    body.classList.remove("modal-bg");
    body.classList.add("default-bg");
    }) ;
     // Close the page when the "Exit Page<" button is clicked
    closeBtn.addEventListener("click", () => {
    window.close();
    });
    
});


// Get your Fortune    
 ;const fortune = [
    "You will have a great day!",
    "You are in for a big surprise!",
    "Your future is filled with uncertainty!",
    "It is time to choose a new path!",
    "Keep those you love close!"
];
const button = document.getElementById('getFortune');
const WholeCookie = document.getElementById('whole-cookie');
const BrokenCookie =document.getElementById('broken-cookie')

// gets a fortune at ramdom from the furtune array
getRandomFortune = () => {
    const randomIndex = Math.floor(Math.random() * fortune.length);
    return fortune[randomIndex];
}
button.addEventListener('click', () => {
    const fortuneMessage = getRandomFortune();
    document.getElementById('fortuneDisplay').innerText = fortuneMessage;
});

let isWholeCookie =true;
button.addEventListener('click',() => {

    // Change the out the whole-cookie to broken cookie

    isWholeCookie =false
    WholeCookie.src = './assets/images/broken-cookie.png';
    WholeCookie.alt = 'A broken fortune cookie';
    console.log('The cookie broke!');
});

    // Select langage from dropdown
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
};
 // Language functions
function setLanguage(language) {
    localStorage.setItem('selectedLanguage', language);
}
function getLanguage() {
    return localStorage.getItem('selectedLanguage') || 'en'; // Default to English
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
    const fortunes = [
        "You will have a great day!",
        "You are in for a big surprise!",
        "Your future is filled with uncertainty!",
        "It is time to choose a new path!",
        "Keep those you love close!"
    ];
    const randomFortune = fortunes[Math.floor(Math.random() * fortunes.length)];
    document.getElementById('fortuneDisplay').innerText = randomFortune;
    addFortune(randomFortune);
});
// Load initial settings
document.getElementById('languageSelector').value = getLanguage();

React

Reply








