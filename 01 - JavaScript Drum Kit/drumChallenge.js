window.addEventListener('keydown', function (e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`) // declares variable as audio tag from HTML, based on the data-key that was pressed
    const key = document.querySelector(`div[data-key="${e.keyCode}"]`) // declares variable as the unicode number from the keypress
    if(!audio) return // stop the function from running altogether
    key.classList.add('playing') // adds playing class to box of corresponding keypress
    audio.currentTime = 0 // rewind to the start
    audio.play(); // play the loaded sound
})

const keys = Array.from(document.querySelectorAll('.key')) // creates array from all elements
keys.forEach(key => key.addEventListener('transitionend', removeTransition)) // iterates through array to add function to clear 'playing' transition
function removeTransition(e){ // function to restore element to original state
    if(e.propertyName !== 'transform') return; // search for transform property that's applied to element
    this.classList.remove('playing'); // references to key in line 11 to remove 'playing' class
}

// find a way to stop everlasting glow if button is held