//Lista de palabras
let palabrasRandom = ["arnau","barcelona","mora","vidra"];

function toUpperCase(lista)
{
    //Creacion lista vacia auxiliar
    let listaAuxiliar = [];
    let fraseAuxiliar = "";

    //Bucle para recorrer todas las variables
    for (let i = 0; i < lista.length; i++)
    {
        //Bucle para recorrer todas las letras de las variables
        for (let x = 0; x < lista[i].length; x++)
        {
            //Condicional para filtrar la primera letra de cada variable
            if (x === 0)
            {
                //Convertimos la letra a mayuscula y la añadimos a la variable
                fraseAuxiliar += lista[i][x].toUpperCase();
            }
            else
            {
                fraseAuxiliar += lista[i][x];
            }
        }
        //Añadimos frase completa a la lista
        listaAuxiliar.push(fraseAuxiliar);
        fraseAuxiliar = "";
    }

    return listaAuxiliar;
}

console.log(toUpperCase(palabrasRandom));