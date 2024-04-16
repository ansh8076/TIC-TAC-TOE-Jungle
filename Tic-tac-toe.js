let btns = document.querySelectorAll(".box");
let turn1 = true;
let msg = document.querySelector(".msg");
let reset = document.querySelector(".rst");
let newP = document.querySelector(".msg");
let newG = document.querySelector("#new-game");
let drawP = document.querySelector(".draw");
let count = 0;


newG.classList.add("hide");
drawP.classList.add("hide");

const winPat = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];


const resetGame = ()=>{
    count=0;
    let audio = new Audio("mixkit-clear-mouse-clicks-2997.wav");
    audio.play();

    turn1 = true;
    enableBtns();
    newP.innerText = "";
    newG.classList.add("hide");
    drawP.classList.add("hide");
}

const gameDraw = function gameDraw(){
    // count=0;
    // drawP.innerText = "It's A Draw";
    drawP.classList.remove("hide");
    let audio = new Audio("mixkit-arcade-space-shooter-dead-notification-272.wav");
    audio.play();
    newG.classList.remove("hide");
    newG.addEventListener("click",resetGame);
    disabledBtns();
}


reset.addEventListener("click",resetGame);


const disabledBtns = ()=>{
    for(let btn of btns){
        btn.disabled = true;
    }
}
const enableBtns = ()=>{
    for(let btn of btns){
        btn.disabled = false;
        btn.innerText = "";
    }
}
const checkWinner = ()=>{

    for(let pattern of winPat){
        let pos1 = btns[pattern[0]].innerText;
        let pos2 = btns[pattern[1]].innerText;
        let pos3 = btns[pattern[2]].innerText;
   
    if(pos1!="" && pos2!="" && pos3!=""){
        if(pos1===pos2 && pos2===pos3){
         let audio = new Audio("24X6C3L-success-win.mp3");
         audio.play();
         newP.innerText = `Congratulations! Winner is ${pos1}`;
         newG.classList.remove("hide");
         newG.addEventListener("click",resetGame)
        disabledBtns();
        return true;
        }
    }
  }
};

        btns.forEach((btn) => {
            btn.addEventListener("click",function(){
                let audio = new Audio("mixkit-arcade-game-jump-coin-216.wav");
                audio.play();
            
                if(turn1){
                    btn.style.color = "red";
                    btn.innerText = "O";
                    turn1 = false;
                }else{
                    btn.style.color = "blue";
                    btn.innerText = "X";
                    turn1 = true;
                }
        
                // disabledBtns()
        
             let isWinner = checkWinner();
             count++;
            if ((count === 9) && (!isWinner)) {
              gameDraw();  
            }
                // checkWinner();
            });
        });