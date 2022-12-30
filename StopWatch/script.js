const startBtn = document.getElementById("start");
const stopBtn = document.getElementById("stop");
const resetBtn= document.getElementById("reset");
const divTimer = document.getElementById("timer");
const divTimeStamp = document.getElementById("timestamp");
//const bg = document.getElementsById("outer_bg");


let min = 0;
let sec = 0;
let msec = 0;
let timer;
let timeStamp;


let lastStartTime = 0;
let timeElapsed = 0;

startBtn.addEventListener("click",start);
stopBtn.addEventListener("click",stop);
resetBtn.addEventListener("click",reset);

function start(){
    startBtn.disabled = true;
    stopBtn.disabled = false;
    resetBtn.disabled = false;

    

    lastStartTime = Date.now();
    
   
    timer = setInterval(updateTimer,1)

};

function stop(){
    startBtn.disabled = false;
    stopBtn.disabled = true;
    resetBtn.disabled = false;

    timeElapsed += Date.now() - lastStartTime;

    // Create an "li" node:
const node = document.createElement("li");

node.textContent = timeStamp;



    divTimeStamp.appendChild(node);

  

    clearInterval(timer);

};

function reset(){
    startBtn.disabled =false;
    stopBtn.disabled = true;
    resetBtn.disabled = true;

    divTimer.textContent = "00:00:000";
    timeElapsed = 0;
    timeStampCount = 0;
    
    while (divTimeStamp.lastElementChild) {
        divTimeStamp.removeChild(divTimeStamp.lastElementChild);
      }

};

function updateTimer(){
   const msecElapsed = Date.now() - lastStartTime + timeLapsed;
   const secElapsed = msecElapsed / 1000;
   const minElapsed = secElapsed / 60;

   const msecText = formatNum(Math.floor(msecElapsed)%1000,3);
   const secText = formatNum(Math.floor(secElapsed)%60,2);
   const minText = formatNum(Math.floor(minElapsed),2);

   
timeStamp=`    ${minText} : ${secText} : ${msecText}`;
   divTimer.textContent = `${minText} : ${secText} : ${msecText}`;

   

};

function formatNum(num,strLen){
    return num.toString().padStart(strLen,"0");
}