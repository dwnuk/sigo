const realizationsEl = document.querySelectorAll('.realizations_el');
const extendedEl = document.querySelectorAll('.realizations_extended_el');
const content = document.querySelector('.realizations_content');
const extended = document.querySelector('.realizations_extended');
const wrapper = document.querySelector('.realizations');
const arrowRotate = document.querySelectorAll('.extended_arrow');

// Add click event listener to elements from the first array
realizationsEl.forEach((element, index) => {
    element.addEventListener('click', () => {
        wrapper.scrollIntoView();

        extended.classList.add('appear');



        if (content.classList.contains('appear')) {
            content.classList.remove('appear');
            content.classList.add('vanish');
        } else {
            content.classList.add('vanish');
        }

        if (extendedEl[index].classList.contains('vanish')) {
            extendedEl[index].classList.remove('vanish');
            extendedEl[index].classList.add('appear');
        } else {
            extendedEl[index].classList.add('appear');
        }

        if (arrowRotate[index].classList.contains('unrotate')) {
            arrowRotate[index].classList.remove('unrotate');
            arrowRotate[index].classList.add('rotate');
        } else {
            arrowRotate[index].classList.add('rotate');
        }
    });
});


//  collapse function

const extendedCollapse = document.querySelectorAll('.realizations_extended_collapse');

const extendedArrow = document.querySelectorAll('.extended_arrow');

// wróć button
extendedCollapse.forEach(function (childElement) {
    childElement.addEventListener('click', function () {
        // Get the parent element of the clicked child
        const parentElement = this.parentElement;




        parentElement.classList.remove('appear');
        extended.classList.remove('appear');

        // parentElement.classList.add('unappear');
        // extended.classList.add('unappear');

        content.classList.remove('vanish');
        wrapper.scrollIntoView();

    });
});


//  arrow button
extendedArrow.forEach(function (childElement) {
    childElement.addEventListener('click', function () {
        // Get the parent element of the clicked child
        const parentElement = this.parentElement;
        this.classList.remove('rotate');
        this.classList.add('unrotate');

        setTimeout(() => {
            extended.classList.remove('appear');
          }, "1000");

        content.classList.remove('vanish');
        content.classList.add('appear');


        if (parentElement.classList.contains('appear')) {
            parentElement.classList.remove('appear');
            parentElement.classList.add('vanish');
        } else {
            parentElement.classList.add('vanish');
        }

        wrapper.scrollIntoView();
    });
});