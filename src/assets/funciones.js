//import {cargarBDD} from "./firebare";

//Consulta a base de datos local
export const databaseQuery = async (ruta) => {
    const promise = await fetch(ruta)
    const products = await promise.json()
    return products
}

//cargarBDD()

