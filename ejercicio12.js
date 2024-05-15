//Valores únicos: Crea una función que reciba por parámetro un array y compruebe si existen elementos duplicados, 
//en caso que existan los elimina para retornar un array sin los elementos duplicados.

//Pista: puedes generar un nuevo array y devolverlo.

//Puedes usar este array para probar tu función:

const duplicates = [
    'sushi',
    'pizza',
    'burger',
    'potatoe',
    'pasta',
    'ice-cream',
    'pizza',
    'chicken',
    'onion rings',
    'pasta',
    'soda'
  ];
 
  function removeDuplicates(list) {
    const uniqueElements = new Set(list); // Creamos un conjunto con los elementos únicos del array.
    return Array.from(uniqueElements); // Convertimos el conjunto de nuevo a un array y lo devolvemos.
  }
  
  
  console.log(removeDuplicates(duplicates));  
  


