const ItemDetail = ({reloj}) => {
    return (

        <div className="container">

            <h1 className="title__details">Detalles del producto</h1>

            <div className="container__details">

                <div className="img__details">
                    <img src={`../images/${reloj.img}`} alt={reloj.marca} />
                </div>

                <div className="data__details">
                    <div>
                        <h1>{reloj.marca}</h1>
                        <h3>{reloj.modelo}</h3>
                        <p>Material: {reloj.material}</p>
                        <p>Género: {reloj.genero}</p>
                        <p>Movimiento: {reloj.movimiento}</p>
                    </div>

                    <div>
                        <p>$ {reloj.precio}</p>
                    </div>

                    <p className="cta">Agregar al carrito</p>
                </div>
            </div>
        </div>
    );
}

export default ItemDetail;
