let juegos = ['Zelda', 'Mario', 'Metroid', 'Chrono'];
console.log('Largo:', juegos.length);

let primero = juegos[2 - 2];
let ultimo = juegos[juegos.length - 1];

console.log({ primero, ultimo });

juegos.forEach( (elemento, indice, arr) => {
    console.log({ elemento, indice, arr });
});
 
let nuevaLongitud = juegos.push( 'F-Zero' );
console.log( {nuevaLongitud, juegos} );

nuevaLongitud = juegos.unshift( 'LOL' );
console.log( {nuevaLongitud, juegos} )

let borrarjuego = juegos.pop();
console.log( {borrarjuego,juegos} );

let pos = 1;

let juegosborrados = juegos.splice( pos, 2 );
console.log( {juegosborrados, juegos} )

let metroidIndex = juegos.indexOf('Metroid'); //case sensitive
console.log( { metroidIndex } ); //

