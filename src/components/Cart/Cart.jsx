import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

import { FaTrashAlt } from "react-icons/fa";

import { Link } from "react-router-dom";

const Cart = () => {

    const {cart, clearCart, totalPrice, removeItem} = useContext(CartContext)

    return (
        <>
            {cart.length === 0 ?
            <div className="container emptyCart__container">
                <h1 className="emptyCart__title">Tu carrito está vacio.</h1>
                <Link to={"/"}><p className="cta__2">Ir al Inicio</p></Link>
            </div>
            :
            <div className="container cart__container">
                
                <h1 className="title__details">Carrito de compras</h1>

                <div className="titles__cart">
                    <h4 className="titles">Remove</h4>
                    <h4 className="titles">Image</h4>
                    <h4 className="titles">Product</h4>
                    <h4 className="titles">Quantity</h4>
                    <h4 className="titles">Price</h4>
                    <h4 className="titles">Total</h4>
                </div>

                {cart.map((reloj, indice) => <div className="card__cart card__cart--grid" key={indice} >

                    <button className="delete__product" onClick={() => removeItem(reloj.id)}> <FaTrashAlt /> </button>

                    <div className="img__cart">
                        <img src={reloj.img} alt={reloj.marca}/>
                    </div>

                    <h5 className="card__product">{reloj.marca}</h5>

                    <p className="card__text">{reloj.cant}</p>

                    <p className="card__text">${new Intl.NumberFormat('de-DE').format( reloj.precio )}</p>

                    <h5 className="card__text card__text--subtotal">${new Intl.NumberFormat('de-DE').format( reloj.precio * reloj.cant )}</h5>

                </div>)}

                <div className="end__cart">

                    <h4 className="total__cart">Precio total</h4>
                    <p className="price__cart">${new Intl.NumberFormat('de-DE').format(totalPrice())}</p>

                    <div className="cta__cart">
                        <button className="cta__2" onClick={clearCart}>Limpiar Carrito</button>
                        <Link to="/checkout">
                            <button className="cta__3">Finalizar Compra</button>
                        </Link>
                    </div>
                </div>
            </div>
            }
        </>
    );
};

export default Cart;
