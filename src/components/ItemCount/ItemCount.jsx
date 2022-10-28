import { useState } from "react";

const ItemCount = () => {

    //contador
    const [itemCount,setContador] = useState(1);
    //onAdd
    const [cantidadCompr, setCantidadComp] = useState(0)

    const modificarContador = (operacion)=> {
        if(operacion == "+"){
            if(itemCount < 10){
                setContador(itemCount + 1)
            }
        } else{
            if(itemCount > 1){
                setContador(itemCount - 1)
            }
        }
    }

    const onAdd = () => {

    }

    
    return (

        <>
            <div className="contador">
                <button onClick={() => modificarContador("-")} className='btn btn-dark'> - </button>
                <div className="cantidad">{itemCount}</div>
                <button onClick={() => modificarContador("+")} className='btn btn-light'> + </button>
            </div>

            <div>
                <button onClick={()=> onAdd()} className='btn btn-dark'>Agregar al carrito</button>
            </div>
        </>
    )
}

export default ItemCount;
