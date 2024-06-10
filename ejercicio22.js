
/* Ejercicio 22

Usa un for para remplazar todas las comidas que no sean veganas con las frutas del array de frutas.

Recuerda no usar frutas duplicadas.

Finalmente, imprime el array resultante. */

const fruits = ["Strawberry", "Banana", "Orange", "Apple"];

const foodSchedule = [
  { name: "Heura", isVegan: true },
  { name: "Salmon", isVegan: false },
  { name: "Tofu", isVegan: true },
  { name: "Burger", isVegan: false },
  { name: "Rice", isVegan: true },
  { name: "Pasta", isVegan: true },
];

// Crear un conjunto para almacenar frutas únicas
const SoloFrutas = new Set(fruits);

for (let i = 0; i < foodSchedule.length; i++) {
  if (!foodSchedule[i].isVegan) {
    // Reemplazar comida no vegana con una fruta única
    for (let fruit of SoloFrutas) {
      foodSchedule[i].name = fruit;
      SoloFrutas.delete(fruit); // Eliminar la fruta utilizada para evitar duplicados
      break; // Salir del bucle de frutas después de reemplazar
    }
  }
}

console.log(foodSchedule);