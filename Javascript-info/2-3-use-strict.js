// “use strict”
// La directiva se presenta como un string: "use strict" o 'use strict'. Cuando se sitúa al principio de un script, el script entero funciona de la manera “moderna”.

// "use strict" se puede poner al inicio de una función. De esta manera, se activa el modo estricto únicamente en esa función. Pero normalmente se utiliza para el script entero.
//este incluye la prevencion de errores silenciosos

// No hay ninguna directiva del tipo "no use strict" que haga al motor volver al comportamiento anterior.
// Una vez entramos en modo estricto, no hay vuelta atrás.

"use strict";

console.log("Activar el Modo Estricto en Todo el Script")

function myFunction() {
  x = 3.14; // Error: x no está declarado
  console.log(x);
}

myFunction();

// console.log("Activar el Modo Estricto en una Función")

// function myFunction() {
//     "use strict";
//     y = 3.14; // Error: y no está declarado
//     console.log(y);
//   }
  
//   myFunction();
  