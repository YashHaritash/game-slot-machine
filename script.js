let value1 = document.getElementById('value1');
let value2 = document.getElementById('value2');
let value3 = document.getElementById('value3');
// let value = document.getElementsByClassName('value');
let result = document.getElementById('result');
let inpSpeed = document.getElementById('inpSpeed');


let values = [
    '😇', '😭', '😃', '😎', '😂', '😋', '😡'
];

function getRandomValue() {
    return values[Math.floor(Math.random() * 7)];
}

let btn = document.getElementById('btn');
let intervalId;


let flag = false;

btn.onclick = function() {
    if(flag){return;}
    flag = true;
    result.innerText = ' ';
    intervalId = setInterval(() => {
        value1.innerText = getRandomValue();
        value2.innerText = getRandomValue();
        value3.innerText = getRandomValue();
    }, 100);
    value1.style.animationDuration = '0.1s';
    value2.style.animationDuration = '0.1s';
    value3.style.animationDuration = '0.1s';


    setTimeout(()=>{
        setTimeout(()=>{
            value1.style.animationDuration = '0.2s';
            value2.style.animationDuration = '0.2s';
            value3.style.animationDuration = '0.2s';
        },500)
        setTimeout(()=>{
            clearInterval(intervalId)
            intervalId = setInterval(() => {
                value1.innerText = getRandomValue();
                value2.innerText = getRandomValue();
                value3.innerText = getRandomValue();
            }, 300);
            value1.style.animationDuration = '0.3s';
            value2.style.animationDuration = '0.3s';
            value3.style.animationDuration = '0.3s';
        },1000)
        setTimeout(()=>{
            value1.style.animationDuration = '0.4s';
            value2.style.animationDuration = '0.4s';
            value3.style.animationDuration = '0.4s';
        },1500)
        setTimeout(()=>{
            clearInterval(intervalId)
            intervalId = setInterval(() => {
                value1.innerText = getRandomValue();
                value2.innerText = getRandomValue();
                value3.innerText = getRandomValue();
            }, 400);
            value1.style.animationDuration = '0.6s';
            value2.style.animationDuration = '0.6s';
            value3.style.animationDuration = '0.6s';
        },2000)
        setTimeout(()=>{
            clearInterval(intervalId)
            intervalId = setInterval(() => {
                value1.innerText = getRandomValue();
                value2.innerText = getRandomValue();
                value3.innerText = getRandomValue();
            }, 600);
            value1.style.animationDuration = '0.8s';
            value2.style.animationDuration = '0.8s';
            value3.style.animationDuration = '0.8s';
        },2500)
        setTimeout(()=>{
            clearInterval(intervalId);
            value1.style.animationDuration = '0s';
            value2.style.animationDuration = '0s';
            value3.style.animationDuration = '0s';
            if(value1.innerText == value2.innerText && value2.innerText == value3.innerText){
                result.innerText = 'You Won!!!';
            }
            else{
                result.innerText = 'Try Again';
            }
            flag = false;
        },3000)
    },2000);
    
};

document.addEventListener('keypress',(event)=>{
    if(event.keyCode == 32){
        btn.onclick();
    }
})


// function updateAnimation(newSpeed){
//     if(intervalId) clearInterval(intervalId);
//     intervalId = setInterval(() => {
//         value1.innerText = getRandomValue();
//         value2.innerText = getRandomValue();
//         value3.innerText = getRandomValue();
//     }, 1000/newSpeed);
// }


// inpSpeed.onchange = (event)=>{
//     document.documentElement.style.setProperty('--speed',event.target.value);
//     updateAnimation(event.target.value)
// }
// intervalId = setInterval(() => {
//     value1.innerText = getRandomValue();
//     value2.innerText = getRandomValue();
//     value3.innerText = getRandomValue();
// }, 100);