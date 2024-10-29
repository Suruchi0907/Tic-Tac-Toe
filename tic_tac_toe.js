let boxes = document.querySelectorAll(".box");
let turn0 = true; //true means O ki turn h otherwise X ki turn h
let msgContainer =document.querySelector(".msg-container");
let msg=document.querySelector("#msg");
let newGame = document.querySelector("#newGame");
let resetGame = document.querySelector("#resetGame");

let winPatterns=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];

const enableboxes = ()=> {
    for(let box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
};

const restart = ()=>{
    turn0 = true;
    enableboxes();
    msgContainer.classList.add("hide");
};

newGame.addEventListener("click",restart);
resetGame.addEventListener("click",restart);

boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        if(turn0){
            box.innerText="O";
            turn0=false;
        }else{
            box.innerText="X";
            turn0=true;
        }
        box.disabled= true;
        checkWinner();
    });
});

const disableBoxes = ()=>{
    for(let box of boxes){
        box.disabled = true;
    }
};

const showWinner = (winner)=>{
    msg.innerText= `Congratulations, Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableBoxes();
};

const checkWinner = ()=>{
    for(let pattern of winPatterns){
        let pos0Val = boxes[pattern[0]].innerText;
        let pos1Val = boxes[pattern[1]].innerText;
        let pos2Val = boxes[pattern[2]].innerText;

        if(pos0Val!="" && pos1Val!="" && pos2Val!=""){
            if(pos0Val=== pos1Val && pos1Val === pos2Val){
                showWinner(pos0Val);
            }
        }
    }
};
