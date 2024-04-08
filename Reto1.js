/*
INSTRUCIONES:
En la fábrica de juguetes del Polo Norte, cada juguete tiene un número de identificación único.
Sin embargo, debido a un error en la máquina de juguetes, algunos números se han asignado a más de un juguete.
¡Encuentra el primer número de identificación que se ha repetido, donde la segunda ocurrencia tenga el índice más pequeño!
En otras palabras, si hay más de un número repetido, debes devolver el número cuya segunda ocurrencia aparezca primero en la lista. 
Si no hay números repetidos, devuelve -1.
*/

const gifts = [1, 2, 3, 2, 1];

function findFirstRepeated(gifts) {
    let elementoBuscado = null;
    let elementosVistos = [];
    for (let i = 0; i < gifts.length; i++) {
        let regaloActual = gifts[i];

        //Verificar si el regalo actual ha sido visto antes
        if (elementosVistos.includes(regaloActual)) {
            elementoBuscado = regaloActual;
            break;
        }
        //Agregar el regalo actual a la lista de elementos vistos
        elementosVistos.push(regaloActual);
    }

    return elementoBuscado;
}

//Resultado
const resultados = findFirstRepeated(gifts);
console.log(resultados);

console.log("Ejercicio");