import { useEffect, useState } from "react";
import ItemList from "../ItemList/ItemList";

import { useParams } from "react-router-dom";
import { databaseQuery } from "../../assets/funciones";

const ItemListContainer = () => {

    const [relojes, setRelojes] = useState([]);

    const [title, setTitle] = useState("")
    const {category} = useParams();

    useEffect(() => {

        if(category){

            databaseQuery("../json/products.json").then(products => {
                const productsList = products.filter(prod => prod.category === (category))
                const cardProducts = ItemList({productsList})
                setRelojes(cardProducts)
                setTitle(category)
            })
            
        } else{

            databaseQuery("../json/products.json").then(productsList => {
                const cardProducts = ItemList({productsList})
                setRelojes(cardProducts)
                setTitle("Home")
            })
        }
    }, [category]);
    
    return(
        <div className="itemListContainer">

            <h1 className="first__title">{title}</h1>

            <div className="container container__cards">
                {relojes}
            </div>
        </div>
    );
};

export default ItemListContainer;