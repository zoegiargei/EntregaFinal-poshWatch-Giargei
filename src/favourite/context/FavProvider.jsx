import { useState } from "react";
import { FavContext } from "./FavContext";

export default function FavProvider({ children }) {
    
    const [fav, setFav] = useState([])

    const isFav = (id) => {
        return fav.find(prod => prod.id === id)
    }

    const addToFav = (item) => {
        if(isFav(item.id)){
            removeFromFav(item.id)
        } else {
            const newItem = {
                ...item
            }
            setFav([...fav, newItem])
        }
    }

    const removeFromFav = (id) => {
        return (setFav(fav.filter(prod => prod.id !== id)))
    }  

  return (
    <FavContext.Provider value={{fav, isFav, addToFav, removeFromFav}}>
        { children }
    </FavContext.Provider>
  )
}
