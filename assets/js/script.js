
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
const fortune = [
    "You will have a great day!",
    "You are in for a big surprise!",
    "Your future is filled with uncertainty!",
    "It is time to choose a new path!",
    "Keep those you love close!"
];
getRandomFortune = () => {
    const randomIndex = Math.floor(Math.random() * fortune.length);
    return fortune[randomIndex];
}
document.getElementById('getFortune').addEventListener('click', () => {
    const fortuneMessage = getRandomFortune();
    document.getElementById('fortuneDisplay').innerText = fortuneMessage;
    addFortune(fortuneMessage);
});
const changeLanguage = () => {
    const languageSelect = document.getElementById('languageSelector');
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