import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import ItemDetail from "../ItemDetail/ItemDetail";
import { getProduct } from "../../assets/firebare";

const ItemDetailContainer = () => {

    const [reloj, setReloj] = useState([]);
    const {id} = useParams();

        /*     useEffect(() => {
        return () => {
          window.scrollTo(0, 0)
        };
        }, []); */

    useEffect( () => {

        getProduct(id).then(product => {

            setReloj(product)
        })

        return () => {
            window.scrollTo(0, 0)
        };

    },[]);

    return (
        <>
            {
                reloj.id ?
                <div className="container">
                    <ItemDetail reloj={ reloj }/>
                </div>
                :
                <div className="container">
                    <h1>Producto inexistente</h1>
                </div>
            }
        </>
    );
}

export default ItemDetailContainer;
