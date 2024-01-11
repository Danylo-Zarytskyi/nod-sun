let butOn = document.querySelector('.On');
let butOff = document.querySelector('.Off');
let sun = document.querySelector('.sun');
let moveRight = document.querySelector('.moveRight');
let moveLeft = document.querySelector('.moveLeft');
let cubeL = document.querySelector('.cubeL');
let cubeS = document.querySelector('.cubeSelected');
let cubeR = document.querySelector('.cubeR');



butOff.addEventListener('click', () => {
    sun.classList.add('sunOff')
});
butOn.addEventListener('click', () => {
    sun.classList.remove('sunOff')
});

moveRight.addEventListener('click', () => {
    
    
    sun.classList.remove('sunRight');
    sun.classList.toggle('sunLeft');
    cubeR.classList.toggle('cubeSelected');
    cubeS.classList.toggle('cubeM');
    cubeS.classList.toggle('cubeSelected');
    
    
})
moveLeft.addEventListener('click', () => {
    
    
    sun.classList.remove('sunLeft');
    sun.classList.toggle('sunRight'); 
    cubeL.classList.toggle('cubeSelected');
    cubeS.classList.toggle('cubeM');
    cubeS.classList.toggle('cubeSelected');

})

