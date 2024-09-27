let boxes=document.querySelectorAll(".box");
let msg=document.querySelector(".msg");
let newBtn=document.querySelector(".newBtn");
let resBtn=document.querySelector(".resBtn");
let turn_x=document.querySelector(".turnX");
let turn_o=document.querySelector(".turnO");

let turn="X";

let winPattern=[
  [0,1,2],
  [0,3,6],
  [0,4,8],
  [1,4,7],
  [2,5,8],
  [3,4,5],
  [6,7,8],
  [2,4,6],
];


let enableBtn=()=>{
  boxes.forEach((box)=>{
    box.innerText="";
   box.disabled=false; 
  })
};

let disableBtn=()=>{
  boxes.forEach((box)=>{
   box.disabled=true; 
  })
};

let reset=()=>{
  turn="X";
  msg.classList.add("hide");
  newBtn.classList.add("hide");
  resBtn.classList.remove("class","hide");
  turn_x.classList.add("hover");
  turn_o.classList.remove("class","hover");
  enableBtn();
};

let showWinner=(winner)=>{
  msg.innerText=`Congratulation The Winner is ${winner}'s`;
  msg.classList.remove("class","hide");
  newBtn.classList.remove("class","hide");
  resBtn.classList.add("hide");
  disableBtn();
}


const checkWinner=()=>{
  for(let pattern of winPattern){
  let posVal1=boxes[pattern[0]].innerText;
  let posVal2=boxes[pattern[1]].innerText;
  let posVal3=boxes[pattern[2]].innerText;

  if(posVal1!="" && posVal2!="" && posVal3!=""){
     if(posVal1===posVal2 && posVal2===posVal3){
       showWinner(posVal1);
     }   
  }
 } 

};

boxes.forEach((box) => {
    box.addEventListener("click",()=>{
      if(turn==="O"){
        box.innerText="O";
        turn="X";
      } 
      else {
        box.innerText="X";
        turn="O";
    }  
    box.disabled=true;
    checkWinner();
    });  
});



boxes.forEach((box)=>{
  turn_x.classList.add("hover");
  box.addEventListener("click", ()=>{
    if(turn==="O"){
      turn_o.classList.add("hover");
      turn_x.classList.remove("class","hover");
    }
    else{
      turn_x.classList.add("hover");
      turn_o.classList.remove("class","hover");
    }
  })
  
});


resBtn.addEventListener("click",reset);
newBtn.addEventListener("click",reset);

