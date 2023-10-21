const burgerBtn = document.querySelector('.burger-btn');
const closeBtn = document.querySelector('.close-nav');
const nav = document.querySelector('.nav-box');
const navEl = document.querySelectorAll('.nav__el');
const navDestination = document.querySelectorAll('.navDestination');

function showNav() {
    nav.classList.add('show');
}

function hideNav() {
    nav.classList.remove('show');
}

burgerBtn.addEventListener('click', showNav);
closeBtn.addEventListener('click', hideNav);



navEl.forEach((element, index) => {
    element.addEventListener('click', () => {
        nav.classList.remove('show');
        navDestination[index].scrollIntoView();
    });
});