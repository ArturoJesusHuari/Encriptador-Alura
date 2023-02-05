let letras = ["e", "i", "a", "o", "u"];
let encriptado = ["enter", "imes", "ai", "ober", "ufat"];

function encriptar(){
    var text = document.getElementById("texto").value;
    if(validarTexto(text)){
        for(var i = 0; i<=4; i++){
            //new RegExp(encriptado[i],"g") para reemplazar todas las ocurrencias
            text = text.replace(new RegExp(letras[i],"g"), encriptado[i]);
        }
        document.getElementById("salida").innerHTML = text;
        if (document.getElementById("copiar") == null){
            crearButtonCopiar();
        }
    }else{
        window.alert("Caracteres no validos");
    }
}
function desencriptar(){
    var text = document.getElementById("texto").value;
    if(validarTexto(text)){
        for(var i=0; i<=4; i++){
            text = text.replace(new RegExp(encriptado[i],"g"), letras[i]);
        }
        document.getElementById("salida").innerHTML = text;
        if (document.getElementById("copiar") == null){
            crearButtonCopiar();
        }
    }else{
        window.alert("Caracteres no validos");
    }
}
function crearButtonCopiar(){
    var button = document.createElement('input');
    button.type = 'button';
    button.id = 'copiar';
    button.value = 'Copiar';
    button.onclick = function() {
        var enlace = document.getElementById("salida");
        var inputFalso = document.createElement("input");
        inputFalso.setAttribute("value", enlace.innerHTML);
        document.body.appendChild(inputFalso);
        inputFalso.select();
        document.execCommand("copy");
        document.body.removeChild(inputFalso);
        window.alert("Copiado al portapapeles!");
    };
    var container = document.getElementById('barrasalida');
    container.appendChild(button);
}
function validarTexto(text){
    var resultado = true;
    //alert(text.charCodeAt(0));
    for(var i=0; i<text.length; i++){
        if(text.charCodeAt(i)>=97 && text.charCodeAt(i)<=122 || text.charCodeAt(i)==241){
            resultado &&= true;
        }else{
            resultado &&= false;
        }
    }
    return resultado;
}
function cambiarTema(){
    if(document.querySelector("body").style.background!="black"){
        document.querySelector("body").style.background = "black";
        document.querySelector(".formulario textarea").style.background = "black";
        document.querySelector(".formulario textarea").style.color = "white";
        document.querySelector(".advertencia").style.color = "white";
        document.getElementById("theme").innerHTML = '<img src="imagenes/Tema-claro.png">';
        document.querySelector(".botonCambiarTema").style.background = "black";
        document.querySelector(".out").style.background = "#494747";
    }else{
        document.querySelector("body").style.background = "white";
        document.querySelector(".formulario textarea").style.background = "white"
        document.querySelector(".formulario textarea").style.color = "black";
        document.querySelector(".advertencia").style.color = "black";
        document.getElementById("theme").innerHTML = '<img src="imagenes/Tema.png">';
        document.querySelector(".botonCambiarTema").style.background = "white";
        document.querySelector(".out").style.background = '#B7B3B3';
    }
    
}