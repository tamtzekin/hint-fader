// Initialise button
const btn = document.getElementsByClassName('btn');

// Create hint class 
class Hint {
    constructor(hintId, hintTextElementId) {
        this.hintId = hintId;
        this.hintTextElementId = hintTextElementId;
    }
};

// Build hint data
const hintIds = ['1', '2', '3', '4'];
const hintTextIds = ['hinttextone', 'hinttexttwo', 'hinttextthree', 'hinttextfour']

// Fill hint data per hint
const hints = [];

for (var i = 0; i < hintIds.length; i++) {
    hints.push(new Hint(hintIds[i], document.getElementById(hintTextIds[i])));
    // console.log(hints)
};

// Check which button was clicked 
for (var i = 0; i < btn.length; i++) {
    (function (i) {
        // To do:use onmouseover / onmouseout instead
        btn[i].onclick = function () {
            triggerFade(hints[i].hintTextElementId);
        }
    }
    (i));
};

// Trigger the fade
function triggerFade(el) {
    if (el.classList.contains('is-hidden')) {
        fadeIn(el);
    } else {
        fadeOut(el);
    };
};

// Fade in 
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

// Fade out
const fadeOut = (el) => {
    el.style.opacity = 1;
    fade();

    function fade() {
        if ((el.style.opacity -= .1) < 0) {
            el.style.display = 'none';
            el.classList.add('is-hidden');
        } else {
            requestAnimationFrame(fade)
        }
    };
};