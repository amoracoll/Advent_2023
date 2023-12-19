/* 
¡Vaya idea ha tenido Sam Elfman! Quiere ofrecer un servicio que te crea un árbol de Navidad 🎄 personalizado en cuestión de segundos.
Para crearlo nos pasan una cadena de caracteres para formar el árbol y un número que indica la altura del mismo.
Cada carácter de la cadena representa un adorno del árbol, y vamos utilizándolos de forma cíclica hasta llegar 
a la altura indicada. Como mínimo siempre nos pasarán uno.
Debemos devolver un string multilínea con el árbol de Navidad formado con los adornos, la altura indicada más 
una última línea con el tronco formado por el carácter | en el centro y, finalmente, un salto de línea \n.
Por ejemplo si recibimos la cadena "123" y el número 4 como altura, tendríamos que construir este árbol:
   1
  2 3
 1 2 3
1 2 3 1
   |

  *
 @ o
* @ o
  |   
*/

function createChristmasTree(height) {
    for (let i = 1; i <= height; i++) {
     //Reiniciamos variable para cada fila
     let patron = " ";
  
      // Agregar espacios en blanco antes de los números
      for (let espacio = 1; espacio <= height - i; espacio++) {
        patron += "  ";
      }
  
      // Agregar números ascendentes, primera mitad
      for (let j = 1; j <= i; j++) {
        patron += j + " ";
      }
  
      // Agregar números descendentes (sin incluir el último), segunda mitad
      for (let k = i - 1; k >= 1; k--) {
        patron += k + " ";
      }
  
      console.log(patron);
    }
  }
  
  createChristmasTree(10);