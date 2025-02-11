const navMenu = document.getElementById("nav-menu");
const navToggle = document.getElementById("nav-toggle");
const navClose = document.getElementById("nav-close");
const navLink = document.querySelectorAll(".nav_link");




/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ TOGGLE MENU ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
/* MENU SHOW */
if(navToggle){
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu')
    })
}

/* MENU HIDDEN */
if(navClose){
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu')
    })
}

/* REMOVE MENU MOBILE */
navLink.forEach(link => link.addEventListener('click', () =>{
    navMenu.classList.remove('show-menu')
}))









/*~~~~~~~~~~~~~~~~~~~~~~~~~~~ CHANGE BACKGROUND HEADER ~~~~~~~~~~~~~~~~~~~~~~~~~~*/

/*~~~~~~~~~~~~~~~~~~~~~~~~ SCROLL SECTIONS ACTIVE LINK ~~~~~~~~~~~~~~~~~~~~~~~~~~~*/

/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ SHOW SCROLL UP ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/

/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ DARK LIGHT THEME ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
const themebutton = document.getElementById('theme-button');

if(localStorage.getItem('mode') == 'dark') {
    darkmode();
} else {
    lightmode();
}

themebutton.addEventListener('click', (e) => {
    if(localStorage.getItem('mode') == 'light') {
        darkmode();
    } else {
        lightmode();
    }
})

function darkmode() {
    document.body.classList.add('dark-theme');
    themebutton.classList.replace('fa-moon', 'fa-sun');
    localStorage.setItem('mode', 'dark')   
}

function lightmode() {
    document.body.classList.remove('dark-theme');
    themebutton.classList.replace('fa-sun', 'fa-moon');
    localStorage.setItem('mode', 'light')   
}
/*~~~~~~~~~~~~~~~~~~~~~~~~~~ SCROLL REVEAL ANIMATION ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/