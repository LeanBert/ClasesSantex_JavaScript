//funcion saludar  -  dentron de la funcion contiene hola!  - mensaje que se muestra en pantalla
function saludar(nombre){ //- se declara variable nombre
    console.log("Hola!", nombre); //se inicializa la variable nombre 
}   

//para invocar o llamar a la funcion
saludar('Leandro');

//--------------------------------------------------------------------------//

//para concatenar se puede usar coma o el (+)
function num(nombre2){
    console.log('Hola' ,nombre2, 'El numero es' , 1 + 6);
}
//las funciones se pueden reutilizar (dato importante)
//llama a la funcion para verla en consola
num('Lean');


//función de retorno
function suma(num1, num2) {
    return num1 + num2; //bloqueante igual que los breack; 
}

const resultado = suma(13,21);

console.log('El resultado es ' ,resultado);

//--------------------------------------------------------------------------------//


//function expression
const suma2 = function(n1, n2){
    return n1 + n2;
}

console.log(suma(4,5));


/*Funciones (ejemplos repaso de clase 2)*/

function(saludo){
    console.log('Hola')
};

