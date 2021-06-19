window.random=[]
var score=0
var startclick=1
var scoreboard=document.getElementById("resultDisplay")
function start(){
    startclick=0
    for(let i=1;i<=10;i++){
        var currentNum;
           do {
            currentNum = Math.ceil(Math.random()*81);
        } while(window.random.includes(currentNum))
        window.random.push(currentNum);
    }
}
