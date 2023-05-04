//ejercicio de carrito en js

const productos = [
    {nombre: "harina", precio: 500},
    {nombre: "galletitas", precio: 100},
    {nombre: "cerveza", precio: 150},
    {nombre: "leche", precio: 200},
    {nombre: "gaseosa", precio: 300},
];

let carrito=[];

let seleccion = prompt("Desea comprar algun producto? si o no");

while(seleccion != "si" && seleccion != "no"){
    alert("Por favor ingresa si o no");

    seleccion = prompt("Hola, desea comprar algo si o no?")
}
