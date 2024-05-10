var timer = 60;
var rn = 0
var newHit = 0;
var score = 0;

function makeBubble() {
    clutter = "";
    for (let i = 1; i <= 162; i++) {
        var rn = Math.floor(Math.random() * 10)
        clutter += `<div  class="bubble img">${rn}</div>`
    }
    document.querySelector("#p-bottom").innerHTML = clutter
}

function newHitMaker() {
    rn = Math.floor(Math.random() * 10)
    newHit = document.querySelector("#hit").textContent = rn
}

function runTimer() {
    var timerinterval = setInterval(function () {
        if (timer > 0) {
            timer--;
            document.querySelector("#timerVal").textContent = timer
        }
        else {
            clearInterval(timerinterval)
            document.querySelector("#p-bottom").innerHTML = `<div class="gameOver">
                                                            <h2>Game Over</h2> 
                                                            <button onclick="startAgain()" id="btn">Start Again</button>
                                                            </div>`
                                                            
        }
    }, 1000)
}

function countScore() {
    document.querySelector("#p-bottom")
        .addEventListener("click", function (dets) {
            var clickedNum = Number(dets.target.innerText)
            if (clickedNum == newHit) {
                score += 10;
                document.querySelector("#score").textContent = score
                newHitMaker();
                makeBubble();
            }

        })

}

function startAgain(){
    makeBubble()
    runTimer()
    newHitMaker()
    timer = 60
}


makeBubble();
runTimer();
newHitMaker();
countScore();
startAgain()