let butOn = document.querySelector('.On');
let butOff = document.querySelector('.Off');
let sun = document.querySelector('.sun');
let moveRight = document.querySelector('.moveRight');
let moveLeft = document.querySelector('.moveLeft');

butOff.addEventListener('click', () => {
    sun.classList.add('sunOff')
});
butOn.addEventListener('click', () => {
    sun.classList.remove('sunOff')
});
moveRight.addEventListener('click', () => {
    sun.classList.add('sunRight'); 
    sun.classList.remove('sunLeft');
})
moveLeft.addEventListener('click', () => {
    sun.classList.remove('sunRight');
    sun.classList.add('sunLeft');
    
})