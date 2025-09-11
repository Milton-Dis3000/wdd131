/* Archivo de script para la actividad de variables de la Semana 01. */

// 1. Declaración de variables con `const`
// Usa `const` para valores que no cambiarán.
const nombreUsuario = "Alex";
const anioActual = new Date().getFullYear();
const PI = 3.14159;

// Intenta reasignar una variable `const` (esto causará un error).
// Descomenta la siguiente línea para ver el error en la consola:
// nombreUsuario = "María";

// 2. Declaración de variables con `let`
// Usa `let` para valores que pueden cambiar.
let puntuacion = 0;
let sesionIniciada = false;

// Puedes reasignar una variable `let` sin problemas.
puntuacion = 100;
sesionIniciada = true;

// 3. Tipos de datos en acción
console.log(`Nombre del usuario: ${nombreUsuario}`); // Tipo: string
console.log(`Año actual: ${anioActual}`);          // Tipo: number
console.log(`Valor de PI: ${PI}`);                   // Tipo: number
console.log(`Puntuación actual: ${puntuacion}`);   // Tipo: number
console.log(`¿Sesión iniciada?: ${sesionIniciada}`); // Tipo: boolean

// 4. Ejemplo de operación con variables
let precioProducto = 25.50;
let cantidad = 3;
let totalCompra = precioProducto * cantidad;
console.log(`El total de la compra es: $${totalCompra}`);

// 5. Comentarios en el código
// Los comentarios de una sola línea comienzan con `//`
/* Los comentarios de bloque
   pueden abarcar varias líneas */