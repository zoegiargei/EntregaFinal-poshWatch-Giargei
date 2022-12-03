import { Link } from "react-router-dom";

const Item = ({reloj}) => {

    return (
        
        <div className="card">

            <div className="cover__card">
                <img src={reloj.img} alt={reloj.marca} className='img__card'/>
            </div>
            
            <h2 className='h2__card'>{reloj.marca} {reloj.modelo}</h2>

            <h3 className="h3__card">
                $ {new Intl.NumberFormat('de-DE').format(reloj.precio)}
            </h3>

            <hr className='hr__card'/>
            
            <div className="footer__card">

                <button className="btn">
                    <Link className="cta__2" to={`/product/${reloj.id}`}>Ver Detalles</Link>
                </button>
            </div>

        </div>
    );
}

export default Item;
