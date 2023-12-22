const lista = [1,2,3,4,22,3,4,6,2,3,4,5,7];

//Funcion para devolver valores unicos

function valoresUnicos(valores)
{
    //Lista auxiliar
    let listaAuxiliar = [];

    //Bucle para pasar por todos los valores
    for (let i = 0; i < valores.length; i++)
    {
        //Condicional para saber si los valores ya estan en la lista
        if (!listaAuxiliar.includes(valores[i]))
        {
            listaAuxiliar.push(valores[i]);
        }
    }
    
    return listaAuxiliar;
}

console.log(valoresUnicos(lista));