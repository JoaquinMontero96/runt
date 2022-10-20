import { obtenerProductos } from '../obtenerProductos.js';
import { guardarCarritoStorage, obtenerCarritoStorage } from './storage.js';

let carrito = [];

const botonCarrito = document.getElementById('cestaCarrito');
const modalCarrito = document.getElementById('containerModal');


botonCarrito.addEventListener('click', () => {
    modalCarrito.classList.toggle('show');
});

const validarProductoRepetido = (productoId) => {

    if(localStorage.getItem('carrito')){
        carrito = obtenerCarritoStorage();
    }

    const productoRepetido = carrito.find(producto => producto.id === productoId);

    if(productoRepetido) {
        productoRepetido.cantidad++;
        const cantidadProducto = document.getElementById(`cantidad${productoRepetido.id}`);
        cantidadProducto.innerText = `Cantidad: ${productoRepetido.cantidad}`;
        actualizarTotalesCarrito(carrito);
    } else {
        agregarAlCarrito(productoId);
    }
};

const agregarAlCarrito = async (productoId) => {
    const carritoContenedor = document.getElementById('carritoContenedor');
    const productos = await obtenerProductos();
    const producto = productos.find(producto => producto.id === productoId);
    carrito.push(producto);

    const div = document.createElement('div');
    div.classList.add('productoEnCarrito');
    div.innerHTML = `
    <p class='productoDato'>${producto.nombre}</p>
    <p class='productoDato'>Precio: $${producto.precio}</p>
    <p class='productoDato' id=cantidad${producto.id}>Cantidad: ${producto.cantidad}</p>
    <button id=eliminar${producto.id} value='${producto.id}' class='btnEliminar'>X</button>
    `

    carritoContenedor.appendChild(div);
    actualizarTotalesCarrito(carrito);
};

const actualizarTotalesCarrito = (carrito) => {
    const totalCantidad = carrito.reduce((acc, producto) => acc + producto.cantidad, 0);
    const totalCompra = carrito.reduce((acc, producto) => acc + (producto.precio * producto.cantidad), 0);

    pintarTotalesCarrito(totalCantidad, totalCompra);
    guardarCarritoStorage(carrito);
};

const pintarTotalesCarrito = (totalCantidad, totalCompra) => {
    const contadorCarrito = document.getElementById('contadorCarrito');
    const precioTotal = document.getElementById('precioTotal');

    contadorCarrito.innerText = totalCantidad;
    precioTotal.innerText = totalCompra;
};

const pintarCarrito = (carrito) => {
    const carritoContenedor = document.getElementById('carritoContenedor');
    carritoContenedor.innerHTML = '';

    carrito.forEach(producto => {
        const div = document.createElement('div');
        div.classList.add('productoEnCarrito');
        div.innerHTML = `
        <p class='productoDato'>${producto.nombre}</p>
        <p class='productoDato'>Precio: $${producto.precio}</p>
        <p class='productoDato' id=cantidad${producto.id}>Cantidad: ${producto.cantidad}</p>
        <button id=eliminar${producto.id} value='${producto.id}' class='btnEliminar'>X</button>
        `
        carritoContenedor.appendChild(div);
    })
;}

const eliminarProductoCarrito = (productoId) => {
    const carritoStorage = obtenerCarritoStorage();
    const carritoActualizado = carritoStorage.filter(producto => producto.id != productoId);

    Swal.fire({
        icon: 'warning',
        title: 'Eliminar producto',
        text: '¿Desea eliminar el producto de su carrito?',
        confirmButtonText: 'Eliminar',
        cancelButtonText: 'Cancelar',
        showCancelButton: true
    }).then((result) => {
        if(result.isConfirmed){
            actualizarTotalesCarrito(carritoActualizado);
            pintarCarrito(carritoActualizado);
            Swal.fire({
                title: 'Producto eliminado',
                icon: 'success',
                timer: 1500
            })
        }
    });
};

export {validarProductoRepetido, agregarAlCarrito, pintarCarrito, actualizarTotalesCarrito, eliminarProductoCarrito}
