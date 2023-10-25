import {products} from './data/products.js';

const DATO1 = "men's clothing";
const DATO2 = "electronics"

function filtrarCategorias(array, DATO1, DATO2) {
    return array.filter(producto => producto.category === DATO1 || producto.category === DATO2);
}

let productos = filtrarCategorias(products, DATO1, DATO2);
const NOMBRES_PRODUCTOS = productos.map(producto => producto.title);

function refactorizarProductos(array) {

    let lista_productos = "";
    array.sort();

    for (let i = 0; i < array.length; i++) {
        lista_productos += (i + 1) + ") " + array[i];
        
        if (i < array.length - 1) {
            lista_productos += "\n";
        }
    }

    return lista_productos;
}

let listaProductos = refactorizarProductos(NOMBRES_PRODUCTOS);


alert("bienvenido a nuestro E-Commerce!");
var NombreUsuario ;
NombreUsuario = prompt( "Cual es su Nombre?");
alert ("Hola: "  + NombreUsuario );


alert("Nuestros productos son: \n 1) Indumentaria Masculina \n 2) Electrónico");

let  eleccionCompra = parseInt(prompt("¿Qué producto desea comprar? En Stock: \n elegir  \n" + listaProductos));
if (isNaN(eleccionCompra)) {
    alert("gracias por su Compra!!!");
} else {
    while (eleccionCompra < 1 || eleccionCompra > 10) {
        eleccionCompra = parseInt(prompt("No se encuentra en Stock. Reintente otra vez : \n" + listaProductos))
    }

    let productoSeleccionado;

    do {
     
    const nombreElegido = NOMBRES_PRODUCTOS[eleccionCompra - 1];
        productoSeleccionado = productos.find(producto => producto.title === nombreElegido);
    
    if (productoSeleccionado) {
        const mensaje = `Nombre: ${productoSeleccionado.title} \n\n Descripción: ${productoSeleccionado.description} \n\n Precio: $${productoSeleccionado.price}`;
        const confirmarCompra = confirm(`Información del producto:\n\n${mensaje}\n\n¿Desea Comprar el Producto seleccionado?`);

        if (confirmarCompra) {
            const FECHA_ACTUAL = new Date();
            const FECHA_ENTREGA = new Date(FECHA_ACTUAL);
            FECHA_ENTREGA.setDate(FECHA_ENTREGA.getDate() + 7);
            alert("¡Gracias por su compra! El producto estaria llegando : " + FECHA_ENTREGA);
        } else {
            alert("Muchas gracias por su Compra!");
        }
        } else {
            eleccionCompra = parseInt(prompt("No hay en Stock.Reintente otra vez:\n" + listaProductos));
        }
    } while (!productoSeleccionado);
    
}