// Initialise hint buttons
// const btn = document.querySelector('.js-btn');

const btn = document.querySelectorAll('span[class^=button]');
console.log("Found", btn.length, "span class which starts with “button”.");

for (var i = 0; i < btn.length; i++) {
    btn[i].addEventListener('click', function() {
        // console.clear();
        // console.log("You clicked", this.innerHTML);
            if (el.classList.contains('is-hidden')) {
                fadeIn(el);
                console.log("trigger fade in");
            } else {
                fadeOut(el);
                console.log("trigger fade out");
            }
    });
}

const el = document.querySelector('.js-fade');


const fade = () => {
    if ((el.style.opacity -= .1) < 0) {
        el.style.display = 'none';
        el.classList.add('is-hidden');
    } else {
        requestAnimationFrame(fade);
    }
};

// Fade animations
const fadeOut = (el) => {
    el.style.opacity = 1;
    fade();
}

const fadeIn = (el, display) => {
    if (el.classList.contains('is-hidden')) {
        el.classList.remove('is-hidden');
    }
    el.style.opacity = 0;
    el.style.display = display || "block";
    
    (function fade() {
        var val = parseFloat(el.style.opacity);
        if (!((val += .1) > 1)) {
            el.style.opacity = val;
            requestAnimationFrame(fade);
        }
    })();
};