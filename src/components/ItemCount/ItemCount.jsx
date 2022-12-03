import { useState } from "react";
import { Link } from "react-router-dom";
import { BiShoppingBag } from "react-icons/bi";

const ItemCount = ({stock, onAdd}) => {

    //Contador
    const [counter ,setCounter] = useState(1);

    //Agregar al carrito
    const addToCart = () => {
        onAdd(counter)
    }

    const increase = () => counter < stock && setCounter(counter + 1)
    const decrease = () => counter > 1 && setCounter(counter - 1)
    
    return (

        <>
            <div className="addToCart">
                
                <div className="counter">
                    <button onClick={decrease} className="decrease"> - </button>

                    <div className="cant">{counter}</div>

                    <button onClick={increase} className="increase"> + </button>
                </div>

                <button onClick={addToCart} className="cta__addToCart"> Agregar al carrito <BiShoppingBag className="icon"/> </button>

            </div>
            
            <div className="finalize__continue">
                <Link to={'/Cart'}>
                    <p onClick={addToCart} className="cta__3">Comprar ahora</p>
                </Link>

                <Link to={'/'}>
                    <p className="cta__2" >Continuar comprando</p>
                </Link>
            </div>
        </>
    )
}

export default ItemCount;
