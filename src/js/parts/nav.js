const burgerBtn = document.querySelector('.burger-btn');
const closeBtn = document.querySelector('.close-nav');
const nav = document.querySelector('.nav-box');
const navEl = document.querySelectorAll('.nav__el');
const navDestination = document.querySelectorAll('.navDestination');
const topbar = document.querySelector('.topbar');

let topbarOffset = topbar.offsetTop;

// show/hide mobile nav
function toggleNav() {
    nav.classList.toggle('show');
    burgerBtn.classList.toggle('active');
}



// add class to nav when scrolled
function glueNav() {
    if (window.scrollY > topbarOffset) {
        topbar.classList.add('fixed');
    } else {
        topbar.classList.remove('fixed');
    }
}

// events
burgerBtn.addEventListener('click', toggleNav);

window.addEventListener('scroll', glueNav);


// make nav work
navEl.forEach((element, index) => {
    element.addEventListener('click', () => {
        nav.classList.remove('show');
        navDestination[index].scrollIntoView();
        burgerBtn.classList.toggle('active');
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

// make nav el bold when in corresponding section
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