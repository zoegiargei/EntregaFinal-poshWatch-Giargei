//Card Productos

export const databaseQuery = async () => {
    const promise = await fetch("./json/products.json")

    const relojes = await promise.json()
    
    const cardRelojes = relojes.map(reloj =>

        <>
            <div className='container section'>

                <div className='element elem1'>
                    <img src={`./images/${reloj.img}`} alt="" className="img__muestra"/>
                </div>

                <div className='element elem2'>
                    <div className="card" key={reloj.id}>

                        <div className="cover__card">
                            <img src={`./images/${reloj.img}`} alt="" className='img__card'/>
                        </div>
                        
                        <h2 className='h2__card'>{reloj.marca} {reloj.modelo}</h2>
                        <p className='p__card'>
                            Material: {reloj.material}
                        </p>
                        <p className='p__card'>
                            Género: {reloj.genero}
                        </p>
                        <p className='p__card'>
                            Movimiento: {reloj.movimiento}
                        </p>

                        <hr className='hr__card'/>
                        
                        <div className="footer__card">
                            <h3 className="h3__footer">
                                $ {reloj.precio}
                            </h3>
                        </div>

                    </div>
                </div>

            </div>
        </>
    )
    return cardRelojes
}
