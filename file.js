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
function box(i){
    if(startclick==1) start()
    if(scoreboard.innerText!=='') return
    const v=document.getElementById(`cell_${i}`)
    if(v.style.backgroundColor==="green") return
    if(window.random.includes(i)) {
        const boxes=document.getElementsByClassName("square")
        for(let j=0;j<10;j++){
            boxes[window.random[j]-1].classList.add("bomb")
            boxes[window.random[j]-1].style.backgroundColor="red"
        }
    scoreboard.innerText="game over"
    }
    else {
        score++       
   v.style.backgroundColor="green"
        document.getElementById("gameScore").innerText=score
       score==71?scoreboard.innerText="Win":''
    }
}
function reset(){
        const b=document.getElementsByClassName("bomb")
            while(b.length!=0)
            b[0].classList.remove("bomb")
        const v=document.getElementsByClassName("square")
    for(let i=0;i<v.length;i++){
        v[i].style.backgroundColor="white"
    }
    window.random=[]
    score=0
    startclick=1
    scoreboard.innerText=''
    document.getElementById("gameScore").innerText=0
}
