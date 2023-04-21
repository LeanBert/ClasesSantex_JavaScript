// alert('Hola');
 
//tipos de datos

let numeroEntero = 10;
let numeroDecimal = 3.14;
let resultado = numeroEntero + numeroDecimal; // 13.14


//cadenas de texto
let nombre = "juan"
let apellido = "perez"
let saludo = "Hola" + nombre + " " + apellido; //Hola juan perez

//booleanos
let esmayorEdad = true;
let tieneLicencia = false;
let pudeConducir = esmayorEdad && tieneLicencia; // false

//undefinded
let variableSinvalor; 
console.log(variableSinvalor); //Undefinded

//Null
let objeti = null;
console.log(objeto);

//array (arreglos)
let numeros = [1,2,3,4,5];
let colores = ['rojo','verde','azul'];

let datos = [1, "Juan", true]
console.log(numeros[2]); //3

//Objetos
let perona = {
    nombre: 'Juan',
    apellido: 'Perez',
    edad: 30,

    saludar: function(){
        console.log('Hola, mi nombre es' + this.nombre + '' + this.apellido);
    }
};

console.log(persona.nombre); //Juan
persona.saludar(); //Hola mi nombre es juan perez

//Funciones

function sumar(numero1, numero2){
    return numero1 + numero2;
}

let resultado = sumar(3, 5); //8

//variables y constantes
let mensaje = 'Hola';
mensaje = 'Hola mundo';
console.log(mensaje);

if(true){
    let variableDentrodelIf = 2;
}

//operadores aritméticos
let a = 5;
let b = 2;

console.log(a + b); //imrime 7
console.log(a - b); //imprime 3
console.log(a * b); //imprime 10
console.log(a / b); //imprime 2.5
console.log(a % b); //imprime 1


//operadores de asignacion
let a = 5;
a = 10; //a = a + 10;
console.log(a); //imprime 15

let b = 10;
b /=2; //b = b /2;
console.log(b); // imprime 5

//operadores de incremento y decremento

let a = 5;
console.log(++a); //imprime 6
console.log(a); //imprime 6

let b = 10;
console.log(b--) //imprime 10
console.log(b); //imprime 9


//operadores de comparacion

// == : igual a
// ===estrictamente igual a mismo valor y tipo de dato
//!= : diferente a
// > : Mayor que
// < : menor que
// <= : menor o igual que

//ejemplo de uso
let a = 5;
let b = 10;

console.log(a == b); // Imprime false
console.log(a != b); // Imprime true
console.log(a < b); //imprime true
console.log(a >=b); //imprime false

//operadores logicos
//&&: and
//||: or
// ! : not

//ejemplos de uso
let a = true;
let b = false;
console.log(a && b); //imprime false;
console.log(a || b); //imprime true;
console.log(!a); //imprime false;


