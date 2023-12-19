/*
En Rovaniemi, Finlandia 🇫🇮, los trineos 🛷 se alquilan por intervalos de tiempo. Cada intervalo se representa como un array de dos elementos, donde el primer elemento es el inicio del alquiler y el segundo es el final.
Por ejemplo, el array [2, 7] representa un alquiler que comienza en la hora 2 y termina en la hora 7. El problema es que a veces los intervalos se superponen entre sí, haciendo que sea un lío entender de qué hora a qué hora se alquiló el trineo.
Nos piden que, para simplificar la tarea de calcular el tiempo total de alquiler, escribamos una función que fusione todos los intervalos superpuestos y devolver un array de intervalos ordenados:
optimizeIntervals([
  [5, 8],
  [2, 7],
  [3, 4]
]) // [[2, 8]]

optimizeIntervals([
  [1, 3],
  [8, 10],
  [2, 6]
]) // [[1, 6], [8, 10]]

optimizeIntervals([
  [3, 4],
  [1, 2],
  [5, 6]
]) // [[1, 2], [3, 4], [5, 6]]
*/

function optimizeIntervals(intervals) {
    //Paso 1: Ordenar los intervalos por el tiempo de inicio
    intervals.sort((a,b) => a[0] - b[0]);

    const mergedIntervals = [];
    let currentInterval = intervals[0];

    //Paso 2: Iterar sobre los intervalos y fusionar aquellos que se superponen
    for (let i = 1; i < intervals.length; i++){
        const nextInterval = intervals[i];

        //Comprobar si hay superposición
        if (currentInterval[1] >= nextInterval[0]){
            //Fusionar los intervalos si se superponen
            currentInterval[1] = Math.max(currentInterval[1],nextInterval[1]);
        }
        else{
            //Si no hay superposición, agregar el intervalo actual a la lista de intervalos
            mergedIntervals.push([...currentInterval]);
            //Establecer el intervalo actual com el siguiente intervalo
            currentInterval = nextInterval;
        }
    }
    //Agregar el último intervalo a la lista de intervalos fusionados
    mergedIntervals.push([...currentInterval]);

    return mergedIntervals;
}

console.log(optimizeIntervals([
    [5, 8],
    [2, 7],
    [3, 4]
  ]));