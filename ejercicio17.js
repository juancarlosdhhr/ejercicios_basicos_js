/* Ejercicio 17

For...in: Usa un for...in para imprimir por consola los datos del alienígena.

Debería tener este formato cada uno de los console.log: "La propiedad ____ tiene cómo valor: ____"

Puedes usar este objeto: */

const alien = {
    name: 'Xenomorph',
    species: 'Xenomorph XX121',
    origin: 'Unknown',
    weight: 180
};


for (const property in alien ) {
console.log(`La propiedad ${property} tiene como valor ${alien[property]}`);


}

// NOTA : Es importante que las comillas sean inversas (``)q , si no, no nos reconoce lo que 
// pongamos aquí ${property} y aquí ${alien[property]}