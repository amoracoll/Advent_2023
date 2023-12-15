/*
INSTRUCIONES:
En el taller de Santa, un elfo travieso ha estado jugando en la cadena de fabricación de regalos, añadiendo o eliminando un paso no planificado.
Tienes la secuencia original de pasos en la fabricación original y la secuencia modificada modified que puede incluir un paso extra o faltar un paso.
Tu tarea es escribir una función que identifique y devuelva el primer paso extra que se ha añadido o eliminado en la cadena de fabricación. Si no hay ninguna diferencia entre las secuencias, devuelve una cadena vacía.
*/

const original = "arnau2";
const modified = "arnau";

function findNaughtyStep(original, modified) {
  if (original === modified) {
    return "Las dos cadenas de texto son iguales";
  } else {
    let diferencia = [];
    for (let i = 0; i < original.length || i < modified.length; i++) {
      if (original[i] !== modified[i]) {
        if (original.length > modified.length) {
          diferencia.push(original[i]);
        } else {
          diferencia.push(modified[i]);
        }
      }
    }
    return diferencia;
  }
}

console.log(findNaughtyStep(original, modified));