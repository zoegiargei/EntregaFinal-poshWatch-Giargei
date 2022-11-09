import { useEffect, useState } from "react";
import ItemList from "../ItemList/ItemList";

import { useParams } from "react-router-dom";
import { databaseQuery } from "../../assets/funciones";
import Banner from "../Banner/Banner";

const ItemListContainer = () => {

    const [relojes, setRelojes] = useState([])

    const [title, setTitle] = useState("")
    const {category} = useParams()
    const {brand} = useParams()

    useEffect(() => {

        if(category){

            databaseQuery("../json/products.json").then(products => {
                const productsList = products.filter(prod => prod.category === (category))
                const cardProducts = ItemList({productsList})
                setRelojes(cardProducts)
                setTitle(category)
            })
            
        } else if(brand){

            databaseQuery("../json/products.json").then(products => {
                const productsList = products.filter(prod => prod.idMarca === (brand))
                const cardProducts = ItemList({productsList})
                setRelojes(cardProducts)
                setTitle(brand)

                console.log(cardProducts)
            })
            
        } else{

            databaseQuery("../json/products.json").then(productsList => {
                const cardProducts = ItemList({productsList})
                setRelojes(cardProducts)
                setTitle("Home")
            })
        }
    }, [category, brand]);
    
    return(

        <>
            <Banner imgBanner={"../images/banner-promocion.png"}/>
        
            <div className="itemListContainer">

                <h1 className="first__title">{title}</h1>

                <div className="container container__cards">
                    {relojes}
                </div>
            </div>
        </>
    );
};

export default ItemListContainer;