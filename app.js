let boxes=document.querySelectorAll(".box");
let resetbtn=document.querySelector("#reset");

let newGame=document.querySelector("#newBtn");
let msg=document.querySelector("#msg");
let msgCont=document.querySelector(".msg-cont");
alert("welcome to MyGame");

let turnO=true;
const winPattern=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],

];

const resetGame=()=>{
    turnO=true;
    enablebox();
    msgCont.classList.add("hide");
};

boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        console.log("box is clicked");
        if(turnO){
            box.innerText="O";
            turnO=false;
        }
        else{
            box.innerText="X";
            turnO=true;
        }
        box.disabled=true;
        checkWinner();
    });
});

const disablebox=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
};

const enablebox=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
};

const showWinner=(winner)=>{
    msg.innerText=`Conguratulations,Winner is ${winner}`;
    msgCont.classList.remove("hide");
    disablebox();
}

const checkWinner=()=>{
    for(let pattern of winPattern){
        let pos1=boxes[pattern[0]].innerText;
        let pos2=boxes[pattern[1]].innerText;
        let pos3=boxes[pattern[2]].innerText;

        if(pos1 !="" && pos2!="" && pos3 !=""){
            if(pos1===pos2&&pos2===pos3){
                console.log("winner",pos1);
                showWinner(pos1);
            }
        }
    }
}

newGame.addEventListener("click",resetGame);
resetbtn.addEventListener("click",resetGame);