//Valores únicos: Crea una función que reciba por parámetro un array y compruebe si existen elementos duplicados, 
//en caso que existan los elimina para retornar un array sin los elementos duplicados.

//Pista: puedes generar un nuevo array y devolverlo.

//Puedes usar este array para probar tu función:


 
  function removeDuplicates(array) {  // <-- Con esta funcion eliminamos elementos duplicados de un array
    
  //Ahora tenemos que crear un nuevo array para almacenar los valores únicos

  const arrayUnico = [];

// Recorremos el array original

for (let i=0; i < array.length; i++) {


// Comprobamos que el elemento actual no está en el arrayUnico

if (!arrayUnico.includes(array[i]))  {
  

  // Si no está, le pediremos que lo añada al arrayUnico

arrayUnico.push(array[i]);

}
}

  
//Le pedimos que nos devuelva el nuevo array sin duplicados

return arrayUnico;

}

//Array

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

// Ahora llamaremos a la función con el array y guardamos el resultado

const sinDuplicados = removeDuplicates(duplicates);


console.log(sinDuplicados);

