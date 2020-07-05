const themeChanger = document.querySelector('button');
const page = document.querySelector('body');
const text = document.querySelector('.button');

let bcg_color = 'black';
let font_color = 'white';

function changeTheme() {
    page.style.backgroundColor = bcg_color;
    page.style.color = font_color;
    text.style.color = font_color;
    console.log("dupa");
}

themeChanger.addEventListener('click', changeTheme)
