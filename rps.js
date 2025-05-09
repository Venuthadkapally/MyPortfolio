const boxes=document.querySelectorAll(".box");
const msg=document.querySelector(".msg-box");
let compscore=0;
let userscore=0;
let userscoremsg=document.querySelector("#user-score");
let compscoremsg=document.querySelector("#comp-score");


const compchoice=()=>{
    const select=["rock","paper","scissor"];
    const index=Math.floor(Math.random()*3);
    return select[index];
};
const showinner=(userwin,compchoice,userchoice)=>{
    if(userwin===true)
    {
        userscore++;
        msg.innerText=`Your's "${userchoice}" beats computer's "${compchoice}"`;
        userscoremsg.innerText=userscore;
        msg.style.backgroundColor="green";

    }
    else{
        compscore++;
        msg.innerText=`Computer's "${compchoice}" won against your's "${userchoice}"`;
        compscoremsg.innerText=compscore;
        msg.style.backgroundColor="#E50046";
    }
};
const Game=(userchoice)=>{
    const computer=compchoice();
    if(userchoice===computer)
    {
        msg.innerText="Game was Draw";
        msg.style.backgroundColor="#205781";
    }
    else
    {
        let userwin=true;
        if(userchoice==="rock")
        {
            userwin=computer==="paper"? false:true;
        }
        else if(userchoice==="paper")
        {
            userwin=computer==="scissor"?false:true;
        }
        else{
            userwin=computer==="rock"?false:true;
        }
    showinner(userwin,computer,userchoice);
    }
};
boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
       const userchoice = box.getAttribute("id");
       console.log("box was clicked",userchoice);
       Game(userchoice);
    });
});