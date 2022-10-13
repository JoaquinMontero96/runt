import { eliminarProductoCarrito } from "./carrito.js";

const botonCerrarCarrito = document.getElementById('btnCerrarCarrito');
const modal = document.getElementById('containerModal');
const carroModal = document.getElementById('modalCarrito');

botonCerrarCarrito.addEventListener('click', () => {
    modal.classList.toggle('show');
})

carroModal.addEventListener('click', (e) => {
    e.stopPropagation();

    // if(e.target.classList.contains('btnEliminar')){
    //     eliminarProductoCarrito(e.target.value);
    // };

    // Utilización del operador OR

    e.target.classList.contains('btnEliminar') && eliminarProductoCarrito(e.target.value);
})