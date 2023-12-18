/* 
Están encendiendo las luces de Navidad 🎄 en la ciudad y, como cada año, ¡hay que arreglarlas!
Las luces son de dos colores: 🔴 y 🟢 . Para que el efecto sea el adecuado, siempre deben estar 
alternadas. Es decir, si la primera luz es roja, la segunda debe ser verde, la tercera roja, la cuarta verde, etc.
Nos han pedido que escribamos una función adjustLights que, dado un array de strings con el color de cada luz 
(representados con los emojis 🔴 para el rojo y 🟢 para el verde), devuelva el número mínimo de luces que hay que cambiar para que estén los colores alternos.

adjustLights(['🟢', '🔴', '🟢', '🟢', '🟢'])
// -> 1 (cambias la cuarta luz a 🔴)

adjustLights(['🔴', '🔴', '🟢', '🔴', '🟢'])
// -> 1 (cambia la primera luz a verde)
*/

//TODO:codigo inacabado
function adjustLights(lights) {
    let cambios = 0;

    for (let i = 0; i < lights.length; i++){
        //Comprobamos si la secuencia coincide
        let coloresEsperados;

        //Comprobación de la primera secuencia
        if (lights[0] ==='🟢'){
            if (i % 2 === 0){
                coloresEsperados = '🟢';
            }
            else{
                coloresEsperados = '🔴';
            }
    
            if (lights[i] !== coloresEsperados){
                lights[i] = coloresEsperados;
                cambios++;
            }
        }
        //Comprobación de la segunda secuencia
        if (lights[0] ==='🔴'){
            if (i % 2 === 0){
                coloresEsperados = '🔴';
            }
            else{
                coloresEsperados = '🟢';
            }
    
            if (lights[i] !== coloresEsperados){
                lights[i] = coloresEsperados;
                cambios++;
            }
        }
    }

    return cambios;
  }

  console.log(adjustLights(['🔴', '🔴', '🟢', '🔴', '🟢']));