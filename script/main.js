var  side = document.getElementById("side");
var openbtn = document.getElementById("openbtn");
var openbutton = document.getElementById("openbutton")

openbutton.onclick=function(){
    if(side.style.right== "-250px" ){
        side.style.right = "0px"
    } 
    else if(side.style.right=="0px"){
        side.style.right = "-250px"
    }
    else(side.style.right="0px")

    
}

