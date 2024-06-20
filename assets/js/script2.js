function estiloDiv(id,color,ancho='200px',alto='200px'){
    const elementoDiv1 = document.querySelector("#div"+id);
    elementoDiv1.style.backgroundColor=color;
    elementoDiv1.style.width = ancho;
    elementoDiv1.style.height = alto;
}

document.addEventListener('DOMContentLoaded', function(){
    // llamar a la funcion estiloDiv
    estiloDiv(1,"blue");
    estiloDiv(2,"red");
    estiloDiv(3,"green");
    estiloDiv(4,"yellow");
});

function cambiarColorDivNegro(id,color="black"){
    const elementoDiv1 = document.querySelector("#div"+id);
    elementoDiv1.style.backgroundColor=color;
}

// Añadir eventos de clic a cada div individualmente
document.querySelector("#div1").addEventListener('click', function() {
    cambiarColorDivNegro(1);
});
document.querySelector("#div2").addEventListener('click', function() {
    cambiarColorDivNegro(2);
});
document.querySelector("#div3").addEventListener('click', function() {
    cambiarColorDivNegro(3);
});
document.querySelector("#div4").addEventListener('click', function() {
    cambiarColorDivNegro(4);
});
