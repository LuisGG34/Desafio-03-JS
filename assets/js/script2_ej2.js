var color_guardado;

function estiloDiv(id,color,ancho='200px',alto='200px',borde="2px solid black"){
    const elementoDiv1 = document.querySelector("#"+id);
    elementoDiv1.style.backgroundColor=color;
    elementoDiv1.style.width = ancho;
    elementoDiv1.style.height = alto;
    elementoDiv1.style.border = borde;
}

document.addEventListener('DOMContentLoaded', function(){
    // llamar a la funcion estiloDiv
    estiloDiv("key","white");
});

function cambiarColor(id,color){
    const elementoDiv1 = document.querySelector("#"+id);
    elementoDiv1.style.backgroundColor=color;
}

document.addEventListener('keydown', function (event) {
    const container = document.getElementById('container');
    const new_div = document.createElement('div');
    new_div.id = "new_div";
    new_div.style.width = '200px';
    new_div.style.height = '200px';
    new_div.style.border = '2px solid black';

    if (event.key === 'a') {
        color_guardado = "pink";
        cambiarColor("key",color_guardado);
    } else if (event.key === 's') {
        color_guardado = "orange";
        cambiarColor("key",color_guardado);
    } else if (event.key === 'd') {
        color_guardado = "skyblue";
        cambiarColor("key",color_guardado);
    } else if (event.key === 'q') {
        color_guardado = "purple";
        new_div.style.backgroundColor = color_guardado;
        container.appendChild(new_div);
    } else if (event.key === 'w') {
        color_guardado = "gray";
        new_div.style.backgroundColor = color_guardado;
        container.appendChild(new_div);
    } else if (event.key === 'e') {
        color_guardado = "brown";
        new_div.style.backgroundColor = color_guardado;
        container.appendChild(new_div);
    } 
    })



