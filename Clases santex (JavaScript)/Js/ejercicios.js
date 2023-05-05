//funciones
//manejo de errores
//objetos 
//clases    
//arrays

//las funciones soon un bloque de codigo que se puede re utilizar varias veces
//en varias partes de nuestro programa

function saludar(nombre){
    console.log("Hola" + " " + nombre);
}

saludar('Leandro');


function sumar(n1,n2){
    return n1 + n2;
}

const resultado = sumar(1,4);
console.log("Resultado de suma =" , resultado);