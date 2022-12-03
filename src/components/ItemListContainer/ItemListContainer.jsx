import { useEffect, useState } from "react";
import ItemList from "../ItemList/ItemList";

import { useParams } from "react-router-dom";
import { getProducts } from "../../assets/firebare";
import Slider from "../Slider/Slider"

import image1 from '../../images/banner-1.png';
import image2 from '../../images/banner-2.png';
import image3 from '../../images/banner-3.png';

const ItemListContainer = () => {

    const [relojes, setRelojes] = useState([])

    const [title, setTitle] = useState("")
    const {category} = useParams()
    const {brand} = useParams()

    useEffect(() => {

        if(category){

            getProducts().then(products => {
                const productsList = products.filter(prod => prod.categoria === (category))
                const cardProducts = ItemList({productsList})
                setRelojes(cardProducts)
                setTitle(category)
            })
            
        } else if(brand){

            getProducts().then(products => {
                const productsList = products.filter(prod => prod.idMarca === (brand))
                const cardProducts = ItemList({productsList})
                setRelojes(cardProducts)
                setTitle(brand)

                console.log(cardProducts)
            })
            
        } else{

            getProducts().then(productsList => {
                const cardProducts = ItemList({productsList})
                setRelojes(cardProducts)
                setTitle("Home")
            })
        }
    }, [category, brand]);
    
    return(

        <>
            <Slider image1={image1} image2={image2} image3={image3} />

            <div className="itemListContainer">
                
                
                <div className="container__cards">
                    <h1 className="first__title title__details">{title}</h1>
                    
                    { relojes }
                </div>
            </div>
        </>
    );
};

export default ItemListContainer;