import React from 'react';

const Home = () => {

    const producto1 = {id: 1, nombre: "reloj1", collection: "collection1"}
    const producto2 = {id: 2, nombre: "reloj2", collection: "collection2"}

    const productos = [producto1, producto2]

    //Ejemplo de promise
    const consultarProductos = (permiso) => {
        return new Promise( (res,rej) =>{

            if(permiso){ //caso éxito
                res(productos)
            }else{ //caso error
                rej("NO CUENTA CON LOS PERMISOS PARA ACCEDER A LA BD")
            }

        })
    }

    //métodos para capturar datos de una PROMISE --> .then(caso exito) y .catch(caso error)
    consultarProductos(true)
    .then(resultado => console.log(resultado))
    .catch(error => console.log(error))

    // fin de ejemplo

    return (

        <>
        </>
    );
}

export default Home;
