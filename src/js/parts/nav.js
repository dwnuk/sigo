const burgerBtn = document.querySelector('.burger-btn');
const closeBtn = document.querySelector('.close-nav');
const nav = document.querySelector('.nav-box');
const navEl = document.querySelectorAll('.nav__el');
const navDestination = document.querySelectorAll('.navDestination');
const topbar = document.querySelector('.topbar');

let topbarOffset = topbar.offsetTop;

function showNav() {
    nav.classList.add('show');
}

function hideNav() {
    nav.classList.remove('show');
}

function glueNav() {
    if (window.scrollY > topbarOffset) {
        topbar.classList.add('fixed');
    } else {
        topbar.classList.remove('fixed');
    }
}

burgerBtn.addEventListener('click', showNav);
closeBtn.addEventListener('click', hideNav);
window.addEventListener('scroll', glueNav);



navEl.forEach((element, index) => {
    element.addEventListener('click', () => {
        nav.classList.remove('show');
        navDestination[index].scrollIntoView();
    });
});



// document.addEventListener('DOMContentLoaded', function () {
//     const menuItems = document.querySelectorAll('.nav__el');

//     function setActive(element) {
//         menuItems.forEach(function (item) {
//             item.classList.remove('active');
//         });
//         element.classList.add('active');
//     }

//     menuItems.forEach(function (item) {
//         item.addEventListener('click', function () {
//             setActive(item);
//         });
//     });
// });

document.addEventListener('DOMContentLoaded', function () {
    var menuItems = document.querySelectorAll('.nav__el');
    var sections = document.querySelectorAll('.navDestination');

    function setActive(element) {
        menuItems.forEach(function (item) {
            item.classList.remove('active');
        });
        element.classList.add('active');
    }



    var observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
            if (entry.isIntersecting) {
                var index = Array.from(sections).indexOf(entry.target);
                setActive(menuItems[index]);
            }
        });
    }, { threshold: 0.5 });

    sections.forEach(function (section) {
        observer.observe(section);
    });
});