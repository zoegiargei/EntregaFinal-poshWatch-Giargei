import { useContext, useEffect } from "react";

import ItemCount from "../ItemCount/ItemCount";

import { CartContext } from "../../context/CartContext";

import { FavContext } from "../../context/FavContext";

import { FaHeart } from "react-icons/fa";

const ItemDetail = ({reloj}) => {

    const { addItem } = useContext(CartContext);

    //Función para agregar Item al cart
    const onAdd = (counter) => {
        addItem(reloj, counter)
    };

    useEffect(() => {
        return () => {
            selectedFav(reloj)
        };
    }, Boolean);

    const {addToFav, removeFromFav, isFav, selectedFav } = useContext(FavContext);
    
    const onAddToFav = () => {

        if(isFav){

            selectedFav(reloj)
            removeFromFav(reloj.id)
        } else {

            selectedFav(reloj)
            addToFav(reloj)
        }
    };

    return (

        <>
            <div className="container__allDetails">

                <h1 className="title__details">Detalles del producto</h1>

                <div className="container__details">

                    <div className="fav" >
                        <FaHeart className={isFav ? "fav__icon fav__icon--selected": "fav__icon"} onClick={ onAddToFav } />
                    </div>

                    <div className="img__details">
                        <img src={reloj.img} alt={reloj.marca} />
                    </div>

                    <div className="data__details">

                        <div className="details">
                            <h2>{reloj.marca}</h2>
                            <h4>{reloj.modelo}</h4>
                            <spam className="spam">Cantidad disponible: {reloj.stock}</spam>
                        </div>

                        <div className="price">
                            <p>$ {new Intl.NumberFormat('de-DE').format(reloj.precio)}</p>
                        </div>

                        <div className="count">
                            <ItemCount stock={ reloj.stock } onAdd={ onAdd }/>
                        </div>

                    </div>
                </div>
            </div>

            <div className="container container__features">
                <h2 className="title__details">Características de <spam>{reloj.marca} {reloj.modelo} </spam></h2>
                
                <div className="features">
                    <h5>Marca: <span className="span">{reloj.idMarca}</span></h5>
                    <h5>Modelo: <span className="span">{reloj.modelo}</span></h5>
                    <h5>Género: <span className="span">{reloj.genero}</span></h5>
                    <h5>Material: <span className="span">{reloj.material}</span></h5>
                    <h5>Movimiento: <span className="span">{reloj.movimiento}</span></h5>
                </div>
            </div>
        </>
    );
}

export default ItemDetail;
