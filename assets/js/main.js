/* Fading hint buttons*/
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
};

// TO DO: already have access to i. clean this up
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
const triggerFade = (el) => {
    if (el.classList.contains('is-hidden')) {
        el.classList.remove('is-hidden');
        el.classList.add('is-visible');
    } else {
        el.classList.add('is-hidden');
        el.classList.remove('is-visible');
    };
};