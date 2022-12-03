import { useState, createContext } from "react";

const FavContext = createContext([])

const FavContextProvider = (props) => {

    const [fav, setFav] = useState([])
    const [isFav, setIsFav] = useState(false)

    //
    const selectedFav = (reloj) => {
        
        if(fav.includes(reloj)){
            setIsFav(true)
        } else{
            setIsFav(!isFav)
        }
    }

    //Para saber si está en fav
    const isInFav = (id) => {
        return fav.find(prod => prod.id === id)
    }

    //Add a fav
    const addToFav = (item) => {
        if(isInFav(item.id)){
            return
        } else {
            const newItem = {
                ...item
            }
            setFav([...fav, newItem])
        }
    }

    //remove of fav
    const removeFromFav = (id) => {
        return (setFav(fav.filter(prod => prod.id !== id)))
    }

    console.log(fav)

    return(
        <FavContext.Provider value={{fav, isInFav, addToFav, removeFromFav, isFav, selectedFav}}>
            {props.children}
        </FavContext.Provider>
    )
};

export { FavContextProvider, FavContext }