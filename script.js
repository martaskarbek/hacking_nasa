const themeChanger = document.querySelector('button');
const page = document.querySelector('body');
const buttons = document.querySelectorAll('.button'); // NodeList (możemy użyć konstrukcji forEach)
let bcg_color = 'black';
let font_color = 'white';

function init() {
    // check if darkMode is not set, then is eqal false
    let darkMode = localStorage.getItem("darkMode");
    darkMode = darkMode === 'false' ? false : true

    if(themeChanger !== null)
        themeChanger.addEventListener('click', changeTheme);

    if(!darkMode) return;
    console.log('%c change style ', 'color: blue;')
    page.classList.toggle('dark-background');
    buttons.forEach(button => button.classList.toggle('dark-text'));
}

function changeTheme() {
    page.classList.toggle('dark-background');
    buttons.forEach(button => button.classList.toggle('dark-text'));
    themeChanger.classList.toggle('dark-button');

    let darkMode = localStorage.getItem("darkMode");
    darkMode = darkMode === 'false' ? false : true
    console.log(darkMode);
    localStorage.setItem("darkMode", !darkMode);
}

init();