let boxes = document.querySelectorAll(".box");
let msgContainer=document.querySelector(".msg-container");
let reset=document.querySelector(".reset");
let newgame=document.querySelector(".new-game");
let msg=document.querySelector("#msg");
let turnO = true; 
let c = 0; 
const winPatterns = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];
boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
      if(turnO)
      {
        box.innerText="O";
        turnO=false;
      }
      else{
        box.innerText="X";
        turnO=true;
      }
      box.disabled=true;
      c++;
      let ans=checkWinner();
      if(c===9 && !ans)
      {
        draw();
      }
     
    });

  });
const draw=()=>{
  msg.innerText="Draw";
  msg.classList.remove("hide");

  disableboxes();
};

const checkWinner=()=>
{
  for(let pattern of winPatterns)
  {
    let pos1=boxes[pattern[0]].innerText;
    let pos3=boxes[pattern[2]].innerText;
    let pos2=boxes[pattern[1]].innerText;
    if(pos1!="" && pos2!="" && pos3!="")
    {
      if(pos1===pos2 && pos2===pos3)
      {
        showwinner(pos1);
        return true;
      }
    }
  }
};
const showwinner=(winner)=>
{
  msg.innerText=`Congratulations,You are Winner ${winner}`;
  msgContainer.classList.remove("hide");
  msg.style.backgroundColor="#8AB2A6";
  disableboxes();
};
const enableboxes=()=>
{
 for(let box of boxes)
 {
  box.disabled=false;
  box.innerText="";
 }
};
const disableboxes=()=>
  {
   for(let box of boxes)
   {
    box.disabled=true;
   }
  };
  const resetgame=()=>{
    turnO=true;
    c=0;
    enableboxes();
    box.innerText="";
    msgContainer.classList.remove("hide");
  };

reset.addEventListener("click",resetgame);
newgame.addEventListener("click",resetgame);
  
