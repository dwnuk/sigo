import {
    gsap
} from "gsap";

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

        // disappear realizations_content
        var tl = gsap.timeline();
        tl.to(content, {
            opacity: 0,
            duration: 1
        });
        tl.to(content, {
            display: 'none'
        });



        // appear realizations_extended
        var tl2 = gsap.timeline();
        tl2.to([extended, extendedEl[index]], {
            display: 'block',
            duration: .1
        });
        tl2.to(extendedEl[index], {
            opacity: 1,
            duration: 1
        });

        // rotate move arrow
        gsap.fromTo(arrowRotate, {
            right: '100%',
            x: '100%'
        }, {
            rotation: -180,
            right: 0,
            x: '0',
            duration: 1
        });

    });
});


//  collapse function with wróć button

const extendedCollapse = document.querySelectorAll('.realizations_extended_collapse');


// wróć button
extendedCollapse.forEach(function (childElement) {
    childElement.addEventListener('click', function () {
        // Get the parent element of the clicked child
        const parentElement = this.parentElement;
        wrapper.scrollIntoView();

        // disappear realizations_extended
        var tl = gsap.timeline();
        tl.to(parentElement, {
            opacity: 0,
            duration: 1
        });
        tl.to([parentElement, extended], {
            display: 'none'
        });


         // appear realizations_content
         var tl2 = gsap.timeline();
         tl2.to(content, {
             display: 'flex'
         });
         tl2.to(content, {
            display: 'flex',
             opacity: 1,
             duration: 1
         });

         // rotate move arrow
        gsap.fromTo(arrowRotate, {
            rotation: -180,
            right: 0,
            x: '0'
        }, {
            right: '100%',
            x: '100%',
            rotation: 0,
            duration: 1
        });

    });
});


//  arrow button
arrowRotate.forEach(function (childElement) {
    childElement.addEventListener('click', function () {
        // Get the parent element of the clicked child
        const parentElement = this.parentElement;
        // this.classList.remove('rotate');
        // this.classList.add('unrotate');
        wrapper.scrollIntoView();

        // appear realizations_content
        var tl2 = gsap.timeline();
        tl2.to(content, {
            display: 'flex'
        });
        tl2.to(content, {
            display: 'flex',
            opacity: 1,
            duration: 1
        });

         // disappear realizations_extended
         var tl = gsap.timeline();
         tl.to(parentElement, {
             opacity: 0,
             duration: 1
         });
         tl.to([parentElement, extended], {
             display: 'none'
         });

         // rotate move arrow
        gsap.fromTo(childElement, {
            rotation: -180,
            right: 0,
            x: '0'
        }, {
            right: '100%',
            x: '100%',
            rotation: 0,
            duration: 1
        });

    });
});



const moreBtn = document.querySelector('.more_btn');
const moreBox = document.querySelector('.realizations_more');

moreBtn.addEventListener('click', function() {
    if (moreBtn.textContent === 'więcej') {
        moreBtn.textContent = 'mniej';
        moreBtn.style.marginTop = '50px';
        moreBox.style.maxHeight = '800px';
        console.log('elo');
    } else {
        moreBtn.textContent = 'więcej';
        moreBox.style.maxHeight = '0';
        moreBtn.style.marginTop = '0';
    }
});