//Calcular un promedio es una tarea extremadamente común, así que prueba a implementar esa funcionalidad en la siguiente función.

//Puedes usar este array para probarla:

const numbers = [12, 21, 38, 5, 45, 37, 6];


function average(numberList) {
  let sum =0;

  for (let i=0; i < numberList.length;i++) {

    sum= sum + numberList[i];
  }


// Ahora vamos a contar la cantidad de numeros del Array
const count = numberList.length;

const average = sum /count;

return average;

}

console.log(average(numbers));


 


