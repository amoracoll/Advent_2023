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

function drawGift(size, symbol){
   if (size === 0){
      return "Datos introducidos nulos";
   }
   else if (size === 1){
      return `/*
      ${symbol}
      /*`;
   }
}

console.log(drawGift(1,"@"));