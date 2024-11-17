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
};

const WholeCooke = document.getElementById('whole-cookie');
const button = document.getElementById('ChangeCookie');
let isWholeCookie =true;
button.removeEventListener('click',() => {
    WholeCooke.classList.add('hidden'); // Fade out the whole-cookie

 // Wait for the fade-out transition, then change the source from whole-cookie to broken-cookie
    setTimeout(() => {
    if (isWholeCookie) {
        WholeCooke.src = '../images/whole-cookie.png';
    } else {
        WholeCooke.src = '../images/broken-cookie.png';
    }
    isWholeCookie = ! isWholeCookie;
    WholeCooke.classList.remove('hidden'); // Fade the image back in
 }, 500); // Match this to the CSS transition duration   
});