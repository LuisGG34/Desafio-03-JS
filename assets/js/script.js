function pintar(color='green'){
    ele.style.backgroundColor = color;
    }
    
const ele = document.getElementById("ele1")
elementoClick = ele.addEventListener("click", function(){
    pintar("yellow");
});
    