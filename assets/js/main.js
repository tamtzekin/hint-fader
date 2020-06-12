// const el = document.querySelector('.js-fade');

// Initialise button
const btn = document.getElementsByClassName('btn');

// Create hint class 
class Hint {
    constructor(hintId, hintText) {
        this.hintId = hintId;
        this.hintText = hintText;
        this.hintRevealed = false;
    }
};

// Set hint data
const hintIds = ['1', '2', '3', '4'];
const hintTextBlocks = ["This is what you need to solve riddle one", "This is what you need to solve riddle two", "This is what you need to solve riddle three", "This is what you need to solve riddle four"];

// Create empty array to push each individual hint's data into
const hints = [];

// Create instances of Hint with all the data needed
for (var i = 0; i < hintIds.length; i++) {
    hints.push(new Hint(hintIds[i], hintTextBlocks[i]));
    console.log(hints)
};

// Check which button was clicked 
for (var i = 0; i < btn.length; i++) {
    (function (i) {
        btn[i].onclick = function () {
            console.log("You clicked button " + i);
            // check button clicked against which hint it is
            if (i === hintIds[i]) {
                console.log("reveal hint text") //hints[i].hintText
            }
        }
    }(i));

};

// Fade out
// const fadeOut = (el) => {
//     el.style.opacity = 1;
//     fade()
// };

// Fade in 
// const fadeIn = (el, display) => {
//     if (el.classList.contains('is-hidden')) {
//         el.classList.remove('is-hidden');
//     }
//     el.style.opacity = 0;
//     el.style.display = display || "block";
    
//     (function fade() {
//         var val = parseFloat(el.style.opacity);
//         if (!((val += .1) > 1)) {
//             el.style.opacity = val;
//             requestAnimationFrame(fade);
//         }
//     })()
// };

// // Check hints
// function checkWhichHint() {
//     for (let i = 0; i < hints.length; i++) {
//             // console.log("You clicked", this.innerHTML);
//             if (el.classList.contains('is-hidden')) {
//                 fadeIn(el);
//                 console.log("trigger fade in");
//             } else {
//                 fadeOut(el);
//                 console.log("trigger fade out")
//             }
//         }
//     }


    // fade handler
//     if (el.classList.contains('is-hidden')) {
//         fadeIn(el);
//         console.log("Hint is clicked");
//     } else {
//         fadeOut(el);
//     };

    // Fade function 
//     const fade = () => {
//         if ((el.style.opacity -= .1) < 0) {
//             el.style.display = 'none';
//             el.classList.add('is-hidden');
//         } else {
//             requestAnimationFrame(fade)
//         }
//     };