let butOn = document.querySelector('.On');
let butOff = document.querySelector('.Off');
let sun = document.querySelector('.sun');
let moveRight = document.querySelector('.moveRight');
let moveLeft = document.querySelector('.moveLeft');
let cubeL = document.querySelector('.cubeL');
let cubeS = document.querySelector('.cubeSelected');
let cubeR = document.querySelector('.cubeR');

let sunOff = true;

butOff.addEventListener('click', () => {
    sun.classList.add('sunOff');
    sunOff = false;
    console.log(sunOff); 
    cubeS.classList.remove('cubeSelected');
    cubeS.classList.add('cubeM');
    return sunOff;
   
        

});
butOn.addEventListener('click', () => {
    sunOff = true;
    sun.classList.remove('sunOff');
    cubeS.classList.add('cubeSelected');
    cubeS.classList.remove('cubeM');
});

moveRight.addEventListener('click', () => {
    sun.classList.remove('sunRight');
    sun.classList.toggle('sunLeft');
    if (sunOff === true) {
        cubeR.classList.toggle('cubeSelected');
        cubeS.classList.toggle('cubeM');
        cubeS.classList.toggle('cubeSelected');
        console.log(sunOff)
    } if (sunOff === false) {
        cubeS.classList.remove('cubeSelected');
        cubeS.classList.add('cubeM');
        return;
    }
    
    
    
    
})
moveLeft.addEventListener('click', () => {
    sun.classList.remove('sunLeft');
    sun.classList.toggle('sunRight');
    if (sunOff === true) {
        cubeL.classList.toggle('cubeSelected');
        cubeS.classList.toggle('cubeM');
        cubeS.classList.toggle('cubeSelected');
    } if (sunOff === false) {
        cubeS.classList.remove('cubeSelected');
        cubeS.classList.add('cubeM');
        return;
    }
     
    

})

