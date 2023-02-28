let textoD, texto;


function Telefono(){
    document.getElementById("tel").innerHTML = "+54 11-6011-7124 // mg_1767@hotmail.com";
}

function ocultar_mostrar(textoD) {
    var texto = document.getElementById (textoD);

if (texto.style.display === "none") {
    texto.style.display = "block";
    
}
else{
    texto.style.display = "none";
    
}


}