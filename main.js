let turn ="x";
let title=document.querySelector(".game");
let arr=[];
let sound =  new Audio("./audio/coin.mp3"); 
function runrun(num1,num2,num3){
    title.innerHTML=`${arr[num1]} winner`;
    document.getElementById("sq"+num1).style.backgroundColor="black";
    document.getElementById("sq"+num2).style.backgroundColor="black";
    document.getElementById("sq"+num3).style.backgroundColor="black";
sound .play()
setInterval (function(){title.innerHTML+="."},1000);
setTimeout(function(){location.reload()},4000)
}

function win(){
    for(let i=1; i<10;i++){
    arr[i]=document.getElementById("sq" +i).innerHTML;
    }
    if(arr[1]===arr[2] && arr[2]===arr[3] && arr[1] !=""){
        runrun(1,2,3)
    }
    else if(arr[4]===arr[5] && arr[5]===arr[6] && arr[5] !=""){
        runrun(4,5,6)
    }
    else if(arr[7]===arr[8] && arr[8]===arr[9] && arr[9] !=""){
        runrun(7,8,9)
    }
    else if(arr[1]===arr[4] && arr[4]===arr[7] && arr[1] !=""){
        runrun(1,4,7)
    }
    else if(arr[2]===arr[5] && arr[5]===arr[8] && arr[5] !=""){
        runrun(2,5,8)
    }
    else if(arr[3]===arr[6] && arr[6]===arr[9] && arr[9] !=""){
        runrun(3,6,9)
    }
    else if(arr[1]===arr[5] && arr[5]===arr[9] && arr[1] !=""){
        runrun(1,5,9)
    }
    else if(arr[3]===arr[5] && arr[5]===arr[7] && arr[7] !=""){
        runrun(3,5,7)
    }
    }
    
    



function game(id) {
    let elment =document.getElementById(id);
    if(turn==="x" && elment.innerHTML ==="" ){
       elment.innerHTML="X";
       title.innerHTML="O";
       turn="o";
    }
    else if(turn==="o" && elment.innerHTML ==="" ){
        elment.innerHTML="O";
        title.innerHTML="X";
        turn="x";
    }
    win()
}


