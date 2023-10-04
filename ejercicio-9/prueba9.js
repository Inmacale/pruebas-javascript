var cadena = prompt("Introduce una cadena de texto");
var resultado = maymin(cadena);
alert("la cadena "+ cadena+ " es "+ resultado);

function maymin(cadena){
    var resultado =" ";
    if(cadena == cadena.toUpperCase()){
        resultado ="La cadena está formada solo por mayúsculas";
    }
    else if (cadena == cadena.toLowerCase()){
        resultado = "La cadena está formada solo por minúsculas";
    }else {
        resultado = "está formada por mayúsculas y minúsculas"
    }
    return resultado;

}