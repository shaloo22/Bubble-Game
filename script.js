let hits =  60;
let score = 0;
let hitran = 0;

function increaseScore() {
    score += 10;
    document.querySelector("#Scoreval").textContent = score;
}


function getNewHit() {
     hitran = Math.floor(Math.random() *10);
    document.querySelector("#Hitval").textContent = hitran;
}

function makeBubble(){
let clutter = "";
for (let i = 1; i<66; i++) {
    
   let ran= Math.floor(Math.random()*10)
   clutter +=  `<div class="bubble">${ran}</div>`;
}

document.querySelector(".dbtm").innerHTML = clutter;
}

let timer = 60;
function runtimer(){
    let timeint = setInterval(function(){
        if(timer > 0){
        timer--;
        document.querySelector("#timerval").textContent = timer;
        } else{
            clearInterval(timeint);
            document.querySelector(".dbtm").innerHTML =
             `<h2 style=" color: green ; font-size: 30px";>Game Over<i>☹</i></h2>`;
        }
    }, 1000);
}

document.querySelector(".dbtm")
.addEventListener("click", function(details) {
     let clickednum = Number(details.target.textContent);
     if(clickednum == hitran){
        increaseScore();
        makeBubble();
        getNewHit();
     }
}

)

makeBubble();
runtimer();
getNewHit();

