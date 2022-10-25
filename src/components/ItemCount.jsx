import { useState } from "react";

const ItemCount = () => {

    //contador
    const [itemCount,setContador] = useState(1);

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

    //onAdd
    const [cantidadComp, setCantidadComp] = useState(1)

    const onAdd = (contador) => {
        
        if(cantidadComp == 0){
            setCantidadComp(cantidadComp + contador)
        }
        console.log(cantidadComp)
    }
    
    return (

        <>
            <div className="contador">
                <button onClick={() => modificarContador("-")} className='btn btn-dark'> - </button>
                <div className="cantidad">{itemCount}</div>
                <button onClick={() => modificarContador("+")} className='btn btn-light'> + </button>
            </div>

            <div>
                <button onClick={()=> onAdd({itemCount})} className='btn btn-dark'>Agregar al carrito</button>
            </div>
        </>
    )
}

export default ItemCount;
