let redcolor=document.getElementById("stopbutton");
let yellowccolor=document.getElementById("readybutton");
let greenccolor=document.getElementById("gobutton");
let stop1=document.getElementById("redcolor");
let ready=document.getElementById("yellowcolor");
let go=document.getElementById("greencolor");


function Stop(){
    redcolor.style.backgroundColor="red";
    stop1.style.backgroundColor="red";
    yellowccolor.style.backgroundColor="black";
    ready.style.backgroundColor="black";
    greenccolor.style.backgroundColor="black";
    go.style.backgroundColor="black";


}
yellowccolor.onclick=function(){
    redcolor.style.backgroundColor="black";
    stop1.style.backgroundColor="black";
    yellowccolor.style.backgroundColor="yellow";
    ready.style.backgroundColor="yellow";
    greenccolor.style.backgroundColor="black";
    go.style.backgroundColor="black";


}
    
greenccolor.addEventListener("click",function(){
    redcolor.style.backgroundColor="black";
    stop1.style.backgroundColor="black";
    yellowccolor.style.backgroundColor="black";
    ready.style.backgroundColor="black";
    greenccolor.style.backgroundColor="green";
    go.style.backgroundColor="green";


})
    
    