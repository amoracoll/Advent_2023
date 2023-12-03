/*
INSTRUCIONES:
En el taller de Santa, los elfos tienen una lista de regalos que desean fabricar y un conjunto limitado de materiales.
Los regalos son cadenas de texto y los materiales son caracteres. Tu tarea es escribir una función que, dada una lista de regalos y los materiales disponibles, devuelva una lista de los regalos que se pueden fabricar.
Un regalo se puede fabricar si contamos con todos los materiales necesarios para fabricarlo.
*/

// Variables iniciales
const gifts = ['tren', 'oso', 'pelota'];
const materials = 'tronesa';

function manufacture(gifts, materials) {
    // Variable de retorno en la función
    const correctGifts = [];

    for (let i = 0; i < gifts.length; i++) {
        const gift = gifts[i];
        let canManufacture = true;

        // Comprobamos todos los caracteres
        for (let j = 0; j < gift.length; j++) {
            const material = gift[j];
            if (!materials.includes(material)) {
                canManufacture = false;
                break;
            }
        }

        // Si es correcta, incluimos esta cadena en la lista
        if (canManufacture) {
            correctGifts.push(gift);
        }
    }

    return correctGifts;
}

const prueba = manufacture(gifts, materials);

console.log(prueba);
