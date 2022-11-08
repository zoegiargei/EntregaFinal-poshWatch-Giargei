import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import ItemDetail from "../ItemDetail/ItemDetail";
import { databaseQuery } from "../../assets/funciones";

const ItemDetailContainer = () => {

    const [reloj, setReloj] = useState([]);
    const {id} = useParams();

    useEffect( () => {

        databaseQuery("../json/products.json")
        .then(products => {
            const product = products.find(productId => productId.id === parseInt(id))
            setReloj(product)
        })

    },[]);

    return (
        <div>
            <ItemDetail reloj={reloj}/>
        </div>
    );
}

export default ItemDetailContainer;
