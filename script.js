const textArea = document.querySelector(".textArea");
const mensaje = document.querySelector(".mensaje");

//Funciones para encriptar y descencriptar

function encriptar(fraseEncriptar) {
    var fraseEncriptar = textArea.value;
    var fraseEncriptada = "";
    fraseEncriptar = fraseEncriptar.toLowerCase();
            
    for (let i = 0; i < fraseEncriptar.length; i++) {
        if (fraseEncriptar [i] == "a") {
            fraseEncriptada = fraseEncriptada + "ai";
        } else if (fraseEncriptar [i] == "e"){
            fraseEncriptada = fraseEncriptada + "enter";     
        } else if (fraseEncriptar [i] == "i"){
            fraseEncriptada = fraseEncriptada + "imes";
        } else if (fraseEncriptar [i] == "o"){
            fraseEncriptada = fraseEncriptada + "ober";
        } else if (fraseEncriptar [i] == "u"){
            fraseEncriptada = fraseEncriptada + "utaf";
        } else{
            fraseEncriptada = fraseEncriptada + fraseEncriptar[i];
        }
    } 
    return fraseEncriptada;
}

function desencriptar(fraseEncriptar) {
    var fraseEncriptar = textArea.value;
    var fraseEncriptada = "";
    fraseEncriptar = fraseEncriptar.toLowerCase();
            
    for (let i = 0; i < fraseEncriptar.length; i++) {
        if (fraseEncriptar [i] == "a") {
            fraseEncriptada = fraseEncriptada + "a";
            i = i+1;
        } else if (fraseEncriptar [i] == "e"){
            fraseEncriptada = fraseEncriptada + "e"; 
            i = i+4;    
        } else if (fraseEncriptar [i] == "i"){
            fraseEncriptada = fraseEncriptada + "i";
            i = i+3;  
        } else if (fraseEncriptar [i] == "o"){
            fraseEncriptada = fraseEncriptada + "o";
            i = i+3;  
        } else if (fraseEncriptar [i] == "u"){
            fraseEncriptar = fraseEncriptada + "u";
            i = i+3;  
        } else{
            fraseEncriptada = fraseEncriptada + fraseEncriptar[i];
        }
    } 
    return fraseEncriptada;
}

//Funciones para conectar los botones con las funciones encriptar y desencriptar

function llamadaEncriptar(){
    const textoEncriptado = encriptar(textArea.value);
    mensaje.value = textoEncriptado;
    textArea.value = "";
    mensaje.style.backgroundImage = "none";
}

function llamadaDesencriptar(){
    const textoDesencriptado = desencriptar(textArea.value);
    mensaje.value = textoDesencriptado;
    textArea.value = "";
    mensaje.style.backgroundImage = "none";
}

function copiar(){
    navigator.clipboard.writeText(mensaje.value);
}

//Funcion para permitir solo letras
function soloLetras(string){
    var out = '';
    var filtro = 'abcdefghijklmnñopqrstuvwxyz '; //Aquí van los caracteres validos
    for (var i=0; i<string.length; i++)
       if (filtro.indexOf(string.charAt(i)) != -1) 
	     out += string.charAt(i);
    return out;
}
