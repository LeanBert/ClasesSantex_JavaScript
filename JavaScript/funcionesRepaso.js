//Ejemplo de funciones (repaso de la clase 2)

function saludo(nombre, apellido) { 
    console.log('Hola' + ' ' + nombre + ' ' + apellido);
}

saludo('Leandro','Fernandez - 1'); //invocar a la funcion
saludo('Leandro1','Fernandez - 2'); //invocar a la funcion
saludo('Leandro2','Fernandez - 3'); //invocar a la funcion
saludo('Leandro4','Fernandez - 4'); //invocar a la funcion

//dato importabte: en las funciones cuando cargas mas de dos argumentos los ignora


//*********************************************************************************/

//funcion de suma()
function suma(n1,n2){ //argumentos
    return n1 + n2;
}

const resultado = suma(1,4);
console.log("El resultado es:" + resultado);

