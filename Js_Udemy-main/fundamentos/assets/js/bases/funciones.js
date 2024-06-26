function saludar ( nombre ) {
  console.log('Hola ' + nombre);
  //hacemos que en la funcion retorne un 1 para que exista un valor de retorno
  return 1;
  
  console.log('Soy un código que está después del return'); //no se ejecuta, ya que el return corta la ejecucion de la funcion
}

const saludar2 = function( nombre ) {
  console.log('Hola ' + nombre);
}

//funcion de flecha, sin argumento
const saludarFlecha = () => {
  console.log('Hola Flecha');
}

//funcion de flecha, con argumento // los agumentos se pueden dejar sin parentesis // para buenas practicas se dejan con parentesis
const saludarFlecha2 = ( nombre ) => {
  console.log('Hola ' + nombre);
}

//puede retornar un objeto
// cuando no retorna nada, el valor es undefined
const retornoDeSaludar = saludar('Ana', 27 , true, 'Colombia');
console.log({retornoDeSaludar});

saludarFlecha();
saludarFlecha2('Ana');


//funcion de sumas y restas
function sumar( a, b ) {
  return a + b;
}

//funcion flecha de sumas y restas
const sumar2 = (a, b) => a + b;

function getAleatorio() {
    return Math.random();
}

// funcion felcha que no tenga llaves
const getAleatorio2 = () => Math.random();


console.log( getAleatorio2() );