//funciones en js

//por declaracion
function saludar(nombre, apellido){
    console.log('Hola' + ' ' + nombre + ' ' + apellido);
}

//por expresion
const saludo = function saludo(){
    console.log('Hola');
} 

//se puede omitir el nombre de la funcion = se conoce como funcion anonima
const saludo1 = function(){
    console.log('Hola');
} 

saludar('Leandro', 'Bertero');