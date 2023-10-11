const url = 'http://localhost:3000/menu';

export const nuevoProducto = async producto => {
    try {
        await fetch(url, {
            method: 'POST',
            body: JSON.stringify(producto),
            header: {
                'const-type': applicattion / json
            }
        })
    } catch (error) {
        console.log(error);
    }
}

export const obtenerProductos = async () => {
    try {
        const resultado = await fetch(url);
        const productos = await resultado.json();
        return productos;
    } catch (error) {
        console.log(error);
    }
}

export const obtenerProducto = async id => {
    try {
        const resultado = await fetch(`${url}/${id}`);
        const producto = resultado.json();
        return producto;
    } catch (error) {
        console.log(error);
    }
}

export const editarProducto = async producto => {
    try {
        await fetch(`${url}/${producto.id}`, {
            method: 'PUT',
            body: JSON.stringify(producto),
            headers: {
                'Constent-Type': 'application/json'
            }
        })
    } catch (error) {
        console.log(error);
    }
}

export const eliminarProducto = async id => {
    try {
        await fetch(`${url}/${id}`, {
            method: 'DELETE'
        })
    } catch (error) {
        console.log(error);
    }
}