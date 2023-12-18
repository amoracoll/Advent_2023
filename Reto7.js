/* Santa está experimentando con nuevos diseños de regalos y necesita tu ayuda para visualizarlos en 3D.
Tu tarea es escribir una función que, dado un tamaño n (entero), genere un dibujo de un regalo en 3D utilizando caracteres ASCII.
Las líneas de los regalos se dibujan con # y las caras con el símbolo que nos pasan como parámetro:
drawGift(4, '+')
*/

drawGift(4, '+')

/*
   ####
  #++##
 #++#+#
####++#
#++#+#
#++##
####
*/
drawGift(5, '*')
/*
    #####
   #***##
  #***#*#
 #***#**#
#####***#
#***#**#
#***#*#
#***##
#####
*/

drawGift(1, '^')
/*
#
*/

function drawGift(size, symbol) {
   if (size % 2 === 0) {
     return "El tamaño debe ser impar";
   }
 
   let result = "";
   const halfSize = Math.floor(size / 2);
 
   for (let i = 0; i < size; i++) {
     if (i === 0 || i === size - 1) {
       result += " ".repeat(halfSize) + "#".repeat(size) + "\n";
     } else if (i <= halfSize) {
       const symbols = symbol.repeat(i);
       const spaces = " ".repeat(halfSize - i);
       result += spaces + "#" + symbols + "#" + "\n";
     } else {
       const symbols = symbol.repeat(size - i);
       const spaces = " ".repeat(i - halfSize);
       result += spaces + "#" + symbols + "#" + "\n";
     }
   }
 
   return result;
 }
 
 console.log(drawGift(5, "#"));