const obtenerProductos = async () => {
    try {
        const response = await fetch('./src/data/stock.json');
        const data = await response.json();

        return data;
    } catch (error) {
        console.log('Hubo un error en ', error);
    }
}

export { obtenerProductos }