//Calcular promedio mezclado: Crea una función que reciba por parámetro un array y cuando es un valor number lo sume 
//y de lo contrario cuente la longitud del string y lo sume.

//Es un poco locura, pero podremos ejercitar nuestra lógica con este ejercicio.

//Puedes usar este array para probar tu función:

const mixedElements = [6, 1, 'Marvel', 1, 'hamburguesa', '10', 'Prometeo', 8, 'Hola mundo'];


//Para calcular la suma de números y longitudes de cadenas en un array:

function calcularSumaMezclada(array) {

// Inicializar la suma total: Declaramos una variable sumaTotal y la inicializamos en 0.
// Esta variable se usará para acumular la suma de los valores.

let sumaTotal= 0;

//Recorrer el array

for (let i=0; i < array.length; i++) {

//Verificamos si elemento es un número:

if (typeof array[i] === 'number') {

//Para sumar el número a la suma total:

sumaTotal += array[i];  // Es la abreviación de --> 
//sumaTotal = sumaTotal + array[i];

// Los signos += se utilizan para incrementar el valor de una variable por una cantidad específica. 
//Es una forma abreviada de escribir una operación de suma y asignación.


}

else if (typeof array[i] === 'string') {

//Si el elemento es una cadena, sumar su longitud a la suma total:

sumaTotal += array[i].length;
}

}

}









}