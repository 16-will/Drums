// Get button elements
var buttons = document.querySelectorAll(".drum");

// Detect Button Press; event listener for each button
for (i=0; i<buttons.length; i++){
    buttons[i].addEventListener("click", function() {
        key = this.innerHTML;   //'this' refers to buttons[i]
        makeSound(key);
        buttonAnimation(key);
    });
}

// Detect Keyboard Press; event listener for document
document.addEventListener("keydown", function(event) {
    key = event.key;
    makeSound(key);
    buttonAnimation(key);
})

// Audio Player
function makeSound(key) {
    switch (key) {
        case "w":
            var tom1 = new Audio('sounds/tom-1.mp3');
            tom1.play();
            break;
        case "a":
            var tom2 = new Audio('sounds/tom-2.mp3');
            tom2.play();
            break;
        case "s":
            var tom3 = new Audio('sounds/tom-3.mp3');
            tom3.play();
            break;
        case "d":
            var tom4 = new Audio('sounds/tom-4.mp3');
            tom4.play();
            break;
        case "j":
            var snare = new Audio('sounds/snare.mp3');
            snare.play();
            break;
        case "k":
            var crash = new Audio('sounds/crash.mp3');
            crash.play();
            break;
        case "l":
            var kick = new Audio('sounds/kick-bass.mp3');
            kick.play();
            break;
        default:
            console.log(this.innerHTML)
    }
}

// Animation
function buttonAnimation(key) {
    var button = document.querySelector(`.${key}`);
    button.classList.add('pressed');
    
    setTimeout(() => {
        button.classList.remove('pressed');
    }, 100);
}