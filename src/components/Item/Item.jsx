import { Link } from "react-router-dom";

const Item = ({reloj}) => {
    return (
        
        <div className="card">

            <div className="cover__card">
                <img src={`../images/${reloj.img}`} alt={reloj.marca} className='img__card'/>
            </div>
            
            <h2 className='h2__card'>{reloj.marca} {reloj.modelo}</h2>

            <button className="btn">
                <Link className="cta" to={`/product/${reloj.id}`}>Ver Detalles</Link>
            </button>

            <hr className='hr__card'/>
            
            <div className="footer__card">
                <h3 className="h3__footer">
                    $ {reloj.precio}
                </h3>
            </div>

        </div>
    );
}

export default Item;
