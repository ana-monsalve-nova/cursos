// Ciclos While y Do While: 

const carros = ['Ford', 'Mazda', 'Honda', 'Toyota'];

//imaginen que queremos imprimir esto de forma individual por cada carro
//para ello, podemos usar un ciclo while

//condicion de ciclo, ya que sin ella el while ( true ) se ejecutara hasta que la ram del computador se quede sin memoria
let i = 0; //esta es una condicion, que se va a asegurar que el while se ejecute una vez

// while( i < carros.length ) { //el while va cumplir un ciclo siempre y cuando la condicion sea verdadera
//     console.log( carros[i] );
//     i++;
// }

//estas condiciones falsas harian que el ciclo nunca se ejecute:
//undefined 
//null
//false
console.warn('Ciclo While')
while( carros[i] ) { //el while va cumplir un ciclo siempre y cuando la condicion sea verdadera
    if (i === 1){
        //que pasaria si quiero obviar la primera posicion, en vez de break, ponemos el continue
        //break;
        i++;
        continue; //usar continue es decirle que 'llegamos a este punto pero no quiero que salgas del ciclo' //entonces va a suceder que se quede en un bucle infinito
    }
    console.log( carros[i] );
    i++;
}
//que pasaria si quiero obviar la primera posicion

console.warn('Do While');
//el Do while va a ejecutar el bloque interno solo una vez
let j = 0;
do {
    console.log(carros[j]);
    j++;
} while ( carros[j] );