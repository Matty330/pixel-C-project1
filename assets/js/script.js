const fortune = [
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

    // Fade out the whole-cookie

    isWholeCookie =false
    WholeCookie.src = './assets/images/broken-cookie.png';
    WholeCookie.alt = 'A broken fortune cookie';
    console.log('The cookie broke!');


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