import { validarProductoRepetido } from "./src/components/carrito.js";
import { obtenerProductos } from "./src/obtenerProductos.js";

const mostrarProductos = async () => {
    const containerProductos = document.getElementById('containerProductos');

    const productos = await obtenerProductos();

    productos.forEach(producto => {
        const div = document.createElement('div');
        div.classList.add('card');
        div.innerHTML +=
        `
        <img src=${producto.img} alt="" class="card-img">
        <h3 class="card-title">${producto.nombre}</h3>
        <p class="card-desc">${producto.desc}</p>
        <p class="card-price">$<span> ${producto.precio}</span></p>
        <button id='boton${producto.id}' class="btn">Comprar</button>
        `
        containerProductos.appendChild(div);

        const boton = document.getElementById(`boton${producto.id}`);
        boton.addEventListener('click', () => {
            validarProductoRepetido(producto.id);
            Swal.fire({
                icon: 'success',
                title: '¡Perfecto!',
                text: 'Producto agregado al carrito con éxito',
                showConfirmButton: false,
                timer: 1500
            })
        })
    });
};

export {mostrarProductos};