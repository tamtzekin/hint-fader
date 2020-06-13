// const el = document.querySelector('.js-fade');

// Initialise button
const btn = document.getElementsByClassName('btn');
// const hintElement = document.getElementsByClassName('hint');

// Create hint class 
class Hint {
    constructor(hintId, hintText, hintTextElementId) {
        this.hintId = hintId;
        this.hintText = hintText;
        this.hintTextElementId = hintTextElementId;
        this.hintRevealed = false;
    }
};

// Build hint data
const hintIds = ['1', '2', '3', '4'];
const hintTextBlocks = ["This is what you need to solve riddle one", "This is what you need to solve riddle two", "This is what you need to solve riddle three", "This is what you need to solve riddle four"];
const hintTextIds = ['hinttextone', 'hinttexttwo', 'hinttextthree', 'hinttextfour']

// Fill hint data per hint
const hints = [];

for (var i = 0; i < hintIds.length; i++) {
    hints.push(new Hint(hintIds[i], hintTextBlocks[i], document.getElementById(hintTextIds[i])));
    // console.log(hints)
};

// Check which button was clicked 
for (var i = 0; i < btn.length; i++) {
    (function (i) {
        btn[i].onclick = function () {
            console.log(hints[i].hintTextElementId);  
            hints[i].hintTextElementId.classList.remove('is-hidden');   
        }
    }(i));
};

// Fade out
const fadeOut = (el) => {
    el.style.opacity = 1;
    fade()
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

// Check which hint box was clicked
function checkWhichHint() {
    for (let i = 0; i < hints.length; i++) {
            // console.log("You clicked", this.innerHTML);
            if (el.classList.contains('is-hidden')) {
                fadeIn(el);
                console.log("trigger fade in");
            } else {
                fadeOut(el);
                console.log("trigger fade out")
            }
        };
    };

// Trigger the fade
function triggerFade() {
    if (el.classList.contains('is-hidden')) {
        fadeIn(el);
        console.log("Hint is clicked");
    } else {
        fadeOut(el);
    };

    // Fade function 
    const fade = () => {
        if ((el.style.opacity -= .1) < 0) {
            el.style.display = 'none';
            el.classList.add('is-hidden');
        } else {
            requestAnimationFrame(fade)
        }
    };
};