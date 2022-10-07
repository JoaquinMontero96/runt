import {mostrarProductos} from "./App.js"
import { actualizarTotalesCarrito, pintarCarrito } from "./src/components/carrito.js";
import {productos} from './src/components/stock.js'
import { obtenerCarritoStorage } from "./src/components/storage.js";

document.addEventListener('DOMContentLoaded', () => {
    mostrarProductos(productos);

    if(localStorage.getItem('carrito')){
        const carrito = obtenerCarritoStorage();
        pintarCarrito(carrito);
        actualizarTotalesCarrito(carrito);
    }
})