import { useContext } from "react"
import { FavContext } from "./context/FavContext"
import { FaTrashAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Favourite() {
  const { fav, removeFromFav } = useContext(FavContext)

  const removeItem = (itemId) => {
    removeFromFav(itemId)
  }
  return (
    <>
      {fav.length === 0 ?
        <div className="container emptyCart__container">
          <h1 className="emptyCart__title">No tienes productos en Favorite.</h1>
          <Link to={"/"}><p className="cta__2">Ir al Inicio</p></Link>
        </div>
        :
        <div className="container favorites__container">
          <div className="title__details">Favorites</div>
          {fav.map((reloj, indice) => <div className="card__cart card__cart--grid" key={indice} >

            <button className="delete__product" onClick={() => removeItem(reloj.id)}> <FaTrashAlt /> </button>

            <div className="img__cart">
              <img src={reloj.img} alt={reloj.marca} />
            </div>

            <h5 className="card__product">{reloj.marca}</h5>

            <p className="card__text">{reloj.cant}</p>

            <p className="card__text">${new Intl.NumberFormat('de-DE').format(reloj.precio)}</p>

          </div>)}
        </div>
      }
    </>
  )
}
