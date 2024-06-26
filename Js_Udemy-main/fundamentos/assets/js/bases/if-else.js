// IF Y ELSE
// IF : Si se cumple la condición se ejecuta el bloque de código
let a = 5;
let b = 10;
if ( a >= 10 ) { //si a es mayor o igual a 10
    console.log('A es mayor o igual a 10');
}
if ( b >= 10 ) { //si b es mayor o igual a 10
    console.log('B es mayor o igual a 10');
}
//ELSE : Si no se cumple la condición se ejecuta el bloque de código
if ( a >= 10 ) { //si a es mayor o igual a 10
    console.log('A es mayor o igual a 10');
}
else { //sino
    console.log('A es menor a 10');
}
if ( b >= 10 ) { //si b es mayor o igual a 10
    console.log('B es mayor o igual a 10');
}
else { //sino
    console.log('B es menor a 10');
}
//ELSE IF : Se utiliza para especificar una nueva condición si la primera condición es falsa. Ayuda a encadenar múltiples condiciones.
if ( a >= 10 ) { //si a es mayor o igual a 10
    console.log('A es mayor o igual a 10');
}
else if ( a >= 5 ) { //si a es mayor o igual a 5
    console.log('A es mayor o igual a 5');
}
else { //sino
    console.log('A es menor a 5');
}

// los tres iguales (===): es para decir que nos cumpla la condicion booleana y el tipo de dato
const hoy = new Date(); //new Date() nos da la fecha actual
let dia = hoy.getDay(); //getDay() nos da el dia de la semana
console.log( {dia} );
// if ( dia === 0 ) {
//     console.log('Domingo');
// }
// else if ( dia === 1 ) {
//     console.log('Lunes');
// }
// else if ( dia === 2 ) {
//     console.log('Martes');
// }
// else {
//     console.log('No es lunes, martes o domingo');
// }

//Sin usar IF, Else o Switch, realizar un código que imprima en consola, el día de la semana de acuerdo a un número leido por prompt (1-7)
dia = 3; // 0:domingo, 1:lunes...
const diaLetras = {
    0:    'domingo',
    1:    'lunes',
    2:    'martes',
    3:    'miércoles',
    4:    'jueves',
    5:    'viernes',
    6:    'sábado',
}

const diaLetrasArreglo = ['domingo','lunes','martes','miércoles','jueves','viernes','sábado',
];

//dia de la semana
console.log( diaLetras[dia] || 'Día no definido');


