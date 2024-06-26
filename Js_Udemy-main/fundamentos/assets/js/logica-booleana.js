// La logica booleana

const regresaTrue = () => {
    console.log('Regresa true');
    return true;
}

const regresaFalse = () => {
    console.log('Regresa False');
    return false;
}


console.warn('Not o la negacion')
console.log(true) //true
console.log(!true) //false
console.log(!false) //true

console.log( !regresaFalse() );

//operador AND: este operador nos va retornar true si todos lo operadores son verdaderos
console.warn('And');
console.log( true && true); //true
console.log( true && false); // false -> esto debido a que and solo nos va retornar true solo si todos los valores son verdaderos

console.log('============');
console.log( regresaFalse() && regresaTrue() );
console.log( regresaTrue() && regresaFalse() );

console.log('=======&&=======');
regresaFalse() && regresaTrue();

//OR: es lo opuesto a AND y para que este retorne true, almenos una condicion lo debe de tener, cuando esta lo tenga, lo demas no importa, siempre retorna true
console.warn('OR'); //true
console.log(true || false);
console.log( false || false );

console.log( regresaTrue() || regresaFalse() );
console.log('4 condiciones', true || true || true || false);

//asignaciones con operadores
console.warn('Asignaciones');

const soyUndefined = undefined;
const soyNull = null;
const soyFalso = false;

const a1 = true && 'Hola Mundo' && 150;
const a2 = 'Hola' && 'Mundo' && soyFalso && true ;
const a3 = soyFalso || 'Ya no soy Falso';
const a4 = soyFalso || soyUndefined || soyNull || 'Ya no soy Falso de nuevo' || true;
const a5 = soyFalso || soyUndefined || regresaTrue() || 'Ya no soy Falso de nuevo' || true;

console.log({a1, a2, a3, a4, a5});

if ( true || true || true || false) {
    console.log('Hacer algo');
} else {
    console.log('Hacer otra cosa');
}