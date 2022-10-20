import { mostrarProductos } from "./App.js"
import { actualizarTotalesCarrito, pintarCarrito } from "./src/components/carrito.js";
import { obtenerCarritoStorage } from "./src/components/storage.js";

document.addEventListener('DOMContentLoaded', () => {
    mostrarProductos();

    if(localStorage.getItem('carrito')){
        const carrito = obtenerCarritoStorage();
        pintarCarrito(carrito);
        actualizarTotalesCarrito(carrito);
    }
})