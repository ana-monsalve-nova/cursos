//Operadores ternarios: es una forma corta de realizar asignaciones o retornar valores basados en una condicion. Es llamado "ternario" porque involucra tres partes: una condición, un resultado si la condición es verdadera, y un resultado si la condición es falsa.

//  dias de la semana abrimos a las 11,
//  pero los fines de semana abrimos a las 9
// entra un sitio web para consultar si esta abierto hoy

const dia = 3; // 0:domingo ... 
const horaActual = 10;

let horaApertura;
let mensaje; //esta abierto, esta cerrado, hoy abrimos a las xxx


// // if( dia === 0 || dia === 6 ) {
// if( [0,6].includes( dia ) ) {
//     console.log('Fin de semana');
//     horaApertura = 9;
// } else {
//     console.log('Dia de semana');
//     horaApertura = 11;
// }
// if (horaActual >= horaApertura) {
//     mensaje = 'Esta abierto';
// } else {
//     mensaje = `Esta cerrado hoy abrimos a las ${horaApertura}`;
// }

//operador ternario ( ? )
horaApertura = ( [0,6].includes(dia) ) ? 9 : 11;

mensaje = (horaActual >= horaApertura) ? 'Esta abierto' : `Esta cerrado hoy abrimos a las ${horaApertura}`;

console.log({horaApertura, mensaje});