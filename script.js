let value1 = document.getElementById('value1');
let value2 = document.getElementById('value2');
let value3 = document.getElementById('value3');
let value = document.getElementsByClassName('value');
let result = document.getElementById('result');

let values = [
    '😇', '😭', '😃', '😎', '😂', '😋', '😡'
];

function getRandomValue() {
    return values[Math.floor(Math.random() * 7)];
}

let btn = document.getElementById('btn');
let intervalId;

let flag = true;
intervalId = setInterval(() => {
    value1.innerText = getRandomValue();
    value2.innerText = getRandomValue();
    value3.innerText = getRandomValue();
}, 100);
btn.onclick = function() {
    flag = !flag;
    if (flag) {
        result.innerText = "";
        intervalId = setInterval(() => {
            value1.innerText = getRandomValue();
            value2.innerText = getRandomValue();
            value3.innerText = getRandomValue();
        }, 100);
        value1.style.animationDuration = '0.1s';
        value2.style.animationDuration = '0.1s';
        value3.style.animationDuration = '0.1s';

    } 
    else {
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
    }
};

document.addEventListener('keypress',(event)=>{
    if(event.keyCode == 32){
        btn.onclick();
    }
})
