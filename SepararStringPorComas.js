//Variable inicial
const cadenaTexto = "Arnau,Mora,Coll";

function SepararTexto(texto) {
    //Utilizamos el metodo split para dividir la cadena en un array
    let textoSeparado = texto.split(",");
    return textoSeparado;

}

console.log(SepararTexto(cadenaTexto));