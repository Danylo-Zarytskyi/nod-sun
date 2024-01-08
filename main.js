let butOn = document.querySelector('.On');
let butOff = document.querySelector('.Off');
let sun = document.querySelector('.sun');
let moveRight = document.querySelector('.moveRight');
let moveLeft = document.querySelector('.moveLeft');

let clickCount = 0;

butOff.addEventListener('click', () => {
    sun.classList.add('sunOff')
});
butOn.addEventListener('click', () => {
    sun.classList.remove('sunOff')
});
moveRight.addEventListener('click', () => {
    clickCount++;
    sun.classList.remove('sunLeft');
    sun.classList.toggle('sunRight'); 
    sun.classList.add('sunMid');
  
    

})
moveLeft.addEventListener('click', () => {
    clickCount++;
    sun.classList.remove('sunRight');
    sun.classList.toggle('sunLeft');
    sun.classList.add('sunMid');
    
    
})