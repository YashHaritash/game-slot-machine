let value1 = document.getElementById('value1');
let value2 = document.getElementById('value2');
let value3 = document.getElementById('value3');
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

function updateAnimation(newSpeed) {
    if (intervalId) clearInterval(intervalId);
    intervalId = setInterval(() => {
        value1.innerText = getRandomValue();
        value2.innerText = getRandomValue();
        value3.innerText = getRandomValue();
    }, 100 * newSpeed);
}
let temp = 800;
let flag = false;

btn.onclick = () => {
    if(flag){return;}
    flag = true;
    let Nspeed = 0;
    document.documentElement.style.setProperty('--speed', 1);
    updateAnimation(1);

    setTimeout(()=>{
        let id = setInterval(() => {
            if (Nspeed >= 7) {
                clearInterval(id);
                clearInterval(intervalId);
                flag = false;
                document.documentElement.style.setProperty('--speed', 0);

                if(value1.innerText == value2.innerText && value2.innerText == value3.innerText){
                    result.innerText = 'You Won!!!';
                }
                else{
                    result.innerText = 'Try Again';
                }
            } else {
                Nspeed++;
                document.documentElement.style.setProperty('--speed', Nspeed);
                updateAnimation(Nspeed);
                
            }
        }, temp);
    },2000);
    
    
};
document.addEventListener('keypress',(event)=>{
    if(event.keyCode == 32){
        btn.onclick();
    }
})
