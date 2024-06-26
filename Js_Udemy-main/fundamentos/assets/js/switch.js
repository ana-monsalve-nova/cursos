//metodo switch: En JavaScript se utiliza para realizar diferentes acciones basadas en diferentes condiciones. Es una alternativa al uso de múltiples if-else if-else y suele ser más legible cuando se tienen muchas condiciones para evaluar.

//en este codigo pasa que si no ponemos un break, una vez encotrado el caso a ejecutar, va seguir haciendo los otros casos

//el break es como decimo que hasta queremos que funcione (tambien se puede implementar en ciclos)

const dia = 0; //0:domingo

switch ( dia ){
    case 0:
        console.log('Domingo');
        break;
    case 1:
        console.log('Lunes');
        break;
    case 2:
        console.log('Martes');
        break;
}
