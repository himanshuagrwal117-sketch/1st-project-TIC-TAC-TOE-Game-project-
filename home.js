let button=document.querySelectorAll(".button1");
let symbol="x";
let temp=button[0].innerText;
let audi1=new Audio("assests/computer-mouse-click-351398.mp3");
let audi2=new Audio("assests/reset.mp3");
let audi3=new Audio("assests/win.mp3");
let audi4=new Audio("assests/tie.mp3");


let score_x=0;
let score_o=0;
let sc_x=document.querySelector(".score1");
sc_x.innerText=score_x;
let sc_o=document.querySelector(".score2");
sc_o.innerText=score_o;
let reset_2=document.querySelector(".reset-2");

let win=document.querySelector(".declare-result");
let flag=1;
win.innerText=`X TURN`;

button.forEach((b)=>{
    
    b.addEventListener("click",()=>{
        
    if(symbol==="x"){
        
        audi1.play();
        symbol="o";
        b.innerText="X";
        b.style.color="green";
        b.disabled=true;
        flag=check("X");
        flag=ifalldone(flag);
        if(flag===0){
          win.innerText=`O TURN`;
        }
        
        
    }
    else{
        
        audi1.play();
        symbol="x";
        b.innerText="O";
        b.style.color="red";
        b.disabled=true;
        flag=check("O");
        flag=ifalldone(flag);
        if(flag===0){
          win.innerText=`X TURN`;
        }
        
    }

});

function ifalldone(flag){
    let c=0;
    button.forEach((b)=>{
        if(b.innerText==="X" || b.innerText==="O"){
         c++;
        }
    })
    if(c===9 && flag===0 ){
        audi4.play();
        let allbuttons=document.querySelectorAll(".button1");
        allbuttons.forEach((b)=>{
        
         b.disabled=false;
         b.innerText=temp;
        })
        win.innerText=`No one wins`;
        setTimeout(() => {
          win.innerText=`X TURN`;
        }, 3000);
        symbol="x";
        flag=1;
        
    }
    return flag;

}

reset_2.addEventListener("click",()=>{
    audi2.play();
    score_x=0;
    score_o=0;
    sc_o.innerText=score_o;
    sc_x.innerText=score_x;
})
function check(x){
    let button1=document.querySelector(".game-box");
    let a1=button1.querySelector("#c1");
    let a2=button1.querySelector("#c2");
    let a3=button1.querySelector("#c3");
    let a4=button1.querySelector("#c4");
    let a5=button1.querySelector("#c5");
    let a6=button1.querySelector("#c6");
    let a7=button1.querySelector("#c7");
    let a8=button1.querySelector("#c8");
    let a9=button1.querySelector("#c9");
    if(a1.innerText===x && a2.innerText==x && a3.innerText===x){
        win.innerText=`Winner is ${x}`;
        sc(x);
        audi3.play();
        re();
        return 1;
        
    }
    else if(a4.innerText===x && a5.innerText==x && a6.innerText===x){
        win.innerText=`Winner is player ${x}`;
        sc(x);
        audi3.play();
        re();
        return 1;

    }
    else if(a7.innerText===x && a8.innerText==x && a9.innerText===x){
        win.innerText=`Winner is player ${x}`;
        sc(x);
        audi3.play();
        re();
        return 1;
        

    }
    else if(a1.innerText===x && a4.innerText==x && a7.innerText===x){
        win.innerText=`Winner is player ${x}`;
        sc(x);
        audi3.play();
        re();
        return 1;
       

    }
    else if(a2.innerText===x && a5.innerText==x && a8.innerText===x){
        win.innerText=`Winner is player ${x}`;
        sc(x);
        audi3.play();
        re();
        return 1;
        

    }
    else if(a3.innerText===x && a6.innerText==x && a9.innerText===x){
        win.innerText=`Winner is player ${x}`;
        sc(x);
        audi3.play();
        re();
        return 1;
        

    }
    else if(a1.innerText===x && a5.innerText==x && a9.innerText===x){
        win.innerText=`Winner is player ${x}`;
        sc(x);
        audi3.play();
        re();
        return 1;
        

    }
    else if(a3.innerText===x && a5.innerText==x && a7.innerText===x){
        win.innerText=`Winner is player ${x}`;
        sc(x);
        audi3.play();
        re();
        return 1;
        

    }
    else{
        return 0;
    }
    
}


});

let reset=document.querySelector(".reset");

reset.addEventListener("click",()=>{

    audi2.play();
    let allbuttons=document.querySelectorAll(".button1");
    allbuttons.forEach((b)=>{
        
        b.disabled=false;
        b.innerText=temp;
    })
    
    win.innerText='X TURN';
    symbol="x";

});


function re(){
    let allbuttons=document.querySelectorAll(".button1");
    allbuttons.forEach((b)=>{
        b.disabled=true;
    })


}


function sc(y){
    if(y==='X'){
            score_x++;
            sc_x.innerText=score_x;
        }
    else{
            score_o++;
            sc_o.innerText=score_o;
    }
}

