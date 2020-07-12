const themeChanger = document.querySelector('button');
const page = document.querySelector('body');
const buttons = document.querySelectorAll('.button'); // NodeList (możemy użyć konstrukcji forEach)
const mainButton = document.querySelectorAll('.main');
const returnButton = document.querySelector('.return');

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
    mainButton.forEach(button => button.classList.toggle('dark-background'));
    themeChanger.classList.toggle('dark-background');
    returnButton.classList.toggle('dark-background');
}

function changeTheme() {
    page.classList.toggle('dark-background');
    buttons.forEach(button => button.classList.toggle('dark-text'));
    //themeChanger.classList.toggle('dark-button');
    mainButton.forEach(button => button.classList.toggle('dark-background'));
    themeChanger.classList.toggle('dark-background');
    returnButton.classList.toggle('dark-text');

    let darkMode = localStorage.getItem("darkMode");
    darkMode = darkMode === 'false' ? false : true
    console.log(darkMode);
    localStorage.setItem("darkMode", !darkMode);
}

init();