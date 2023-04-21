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
