//Ciclo For: Es el más común y se usa cuando sabes cuántas veces quieres que se repita el ciclo.

const heroes = ['Batman', 'Superman', 'Mujer Maravilla', 'Aquaman'];

console.warn('Ciclo For tradicional')
for( let i = 0; i < heroes.length; i++ ){ //el ciclo for tiene 3 partes: (uno que inicializa la variable ; una parte que condiciona el while ;  y el incrementador)
    console.log( heroes[i] );
}

console.warn('For in');
//es bastante utilizado, si queremos hacer lo mismo que el anterior solo que empieza a cambiar lo siguiente:
//inicializamos la variable en in, el for in se va a encargar de manejar la condicion y salir del ciclo cuando ya no hayan mas elementos
for ( let i in heroes ) { 
    console.log( heroes[i] );
}

console.warn('For of');
for( let heroe of heroes){
    console.log( heroe );
}