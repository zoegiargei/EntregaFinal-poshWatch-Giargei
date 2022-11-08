//Consulta a base de datos
export const databaseQuery = async (ruta) => {
    const promise = await fetch(ruta)
    const products = await promise.json()
    return products
}