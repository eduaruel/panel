import { obtenerProductos } from "./api.js";

const listado = document.querySelector('#listado-Productos');

document.addEventListener('DOMContentLoaded', mostrarProductos);

async function mostrarProductos() {

    const productos = await obtenerProductos();
    console.log(productos);
}