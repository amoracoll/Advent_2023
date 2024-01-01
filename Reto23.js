// ¡Santa 🎅 está organizando una gran cena navideña 🫓 y quiere asegurarse de que todos los platos sean únicos y variados!
// Te da una lista de platos navideños donde cada elemento consiste en una lista de strings que comienza con el nombre del plato, 
// seguido de todos los ingredientes utilizados para su preparación.
// Tienes que escribir una función que agrupe los platos por ingredientes siempre que haya al menos 2 platos que los contengan.
// Así que devolvemos un array de arrays donde la primera posición es el nombre del ingrediente y el resto los nombres de los platos.
// Tanto la lista de ingredientes como los platos deben estar ordenados alfabéticamente.

const dishes = [
    ["christmas turkey", "turkey", "sauce", "herbs"],
    ["cake", "flour", "sugar", "egg"],
    ["hot chocolate", "chocolate", "milk", "sugar"],
    ["pizza", "sauce", "tomato", "cheese", "ham"],
  ];

  function organizeChristmasDinner(dishes){
    //Creamos una lista con todos los ingredientes
    let ingredientesUnicos = [];

    for (let i = 0; i < dishes.length; i++){
        for (let x = 1; x < dishes[i].length; x++){
            if (!ingredientesUnicos.includes(dishes[i][x])){
                ingredientesUnicos.push(dishes[i][x]);
            }
        }
    }

    

    return ingredientesUnicos;
  };

  console.log(organizeChristmasDinner(dishes));