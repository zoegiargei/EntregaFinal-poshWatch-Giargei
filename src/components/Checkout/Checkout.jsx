import React from 'react';

import Form from 'react-bootstrap/Form';

import Banner from '../Banner/Banner';
import imageBanner from '../../images/banner-tarjetas2.png';

import { useContext, useEffect } from "react";
import { CartContext } from "../../context/CartContext";
import { useNavigate } from 'react-router-dom';
import { createBuyOrder, getProduct, updateProduct} from '../../assets/firebare';

//Toastify
import { toast } from 'react-toastify';

const Checkout = () => {

    useEffect(() => {
        return () => {
          window.scrollTo(0, 0)
        };
    }, []);
    
    const dataForm = React.useRef()

    const {cart, totalPrice, clearCart} = useContext(CartContext)

    let redirect = useNavigate()

    const consultForm = (e) => {
        e.preventDefault()
        console.log(dataForm)
        
        const formDataObject = new FormData(dataForm.current)
        const values = Object.fromEntries(formDataObject)

        if(values.email === values.email2){

            console.log("Los emails coinciden")

            cart.map(prod => 
                
                getProduct(prod.id).then(modifiedProduct => {

                    modifiedProduct.stock -= prod.cant
                    updateProduct(prod.id, modifiedProduct).then( msj => (console.log(msj) ))
                })
            )

            createBuyOrder(values, totalPrice(), new Date() ).then(order => {

                toast.success(`La orden de compra se generó con éxito. Orden Número: ${order.id}   -   Fecha: ${(new Date()).toLocaleString()}`, {
                    theme: "colored"
                })
                
                e.target.reset()
                clearCart()
                redirect("/")

            }).catch(

                error => {
                    toast.error(`Hubo un error al intentar generar la orden de compra.`, {
                        theme: "colored"
                    })
                    console.log(error)
                }
            )


        } else{

            console.log("Los emails coinciden")
            toast.info(`Los emails no coinciden. Intente de nuevo.`, {
                theme: "colored"
            })
        }
    }

    return (

        <>
            {cart.length === 0 ? <div>
                <h1 className="container">Para hacer el checkout primero debe realizar la compra de al menos 1 producto</h1>
            </div>
            :

            <div>
                <Banner imgBanner={imageBanner} />
                <div className="container container__checkout">

                    <h1 className="title__details" >Detalles de compra</h1>
                    <div className="container details">

                        {cart.map((prod, indice) =>

                            <div key={indice} className="container__details container__details--grid" >
                                
                                <div className="img__detail" ><img src={prod.img} alt={prod.marca} /></div>
                                <p className="product__marca" >{prod.marca}</p>
                                <p className="product__detail" >Cantidad: {prod.cant}</p>
                                <p className="product__detail" >Precio unitario: {prod.precio}</p>
                                <p className="product__subtotal" >Subtotal: ${new Intl.NumberFormat('de-DE').format(prod.precio * prod.cant)}</p>
                            </div>
                        )}

                        <div className="total__price">
                            <h1 className="total">Total: ${new Intl.NumberFormat('de-DE').format(totalPrice())}</h1>
                        </div>
                    </div>


                    <Form onSubmit={ consultForm } ref={ dataForm }>
                        <h1>Checkout</h1>

                        <Form.Group className="col-sm-6 mb-3" controlId="formBasicEmail">
                            <Form.Label>Nombre</Form.Label>
                            <Form.Control type="text" name="nombre" placeholder="Ingrese su nombre" required />
                        </Form.Group>

                        <Form.Group className="col-sm-6 mb-3" controlId="formBasicEmail">
                            <Form.Label>Apellido</Form.Label>
                            <Form.Control type="text" name="apellido" placeholder="Ingrese su apellido" required />
                        </Form.Group>

                        <Form.Group className="col-sm-6 mb-3" controlId="formBasicEmail">
                            <Form.Label>Número telefónico</Form.Label>
                            <Form.Control type="number" name="numeroTel" placeholder="54 111 2 345678" required />
                        </Form.Group>

                        <Form.Group className="col-sm-6 mb-3" controlId="formBasicEmail">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" name="email" placeholder="to@example.com" required />
                            <Form.Text className="text-muted">
                            Nunca compartiremos sus datos sin su consentimiento.
                            </Form.Text>
                        </Form.Group>

                        <Form.Group className="col-sm-6 mb-3" controlId="formBasicEmail">
                            <Form.Label>Vuelve a escribir el email</Form.Label>
                            <Form.Control type="email" name="email2" placeholder="to@example.com" required />
                        </Form.Group>

                        <Form.Group className="col-sm-6 mb-3">
                            <Form.Label>País</Form.Label>
                            <Form.Select className="mb-3" aria-label="Default select example">
                                <option>Elige..</option>
                                <option value="1" name="pais">Argentina</option>
                            </Form.Select>

                            <Form.Label>Provincia</Form.Label>
                            <Form.Select aria-label="Default select example">
                                <option>Elige..</option>
                                <option value="1" name="ciudad">Córdoba</option>
                            </Form.Select>
                        </Form.Group>

                        <Form.Group className="mb-3 col-sm-6" controlId="formBasicPassword">
                            <Form.Label>Dirección</Form.Label>
                            <Form.Control type="text" name="direccion" placeholder="1234 Main St" />
                        </Form.Group>

                        <Form.Check
                            className="col-sm-6 mb-3"
                            type="checkbox"
                            name="checkbox"
                            label="Me gustaría recibir novedades y ofertas de Posh Watch"
                        />

                        <button className="mt-3 cta__2" variant="primary" type="submit" >
                            Finalizar compra
                        </button>
                    </Form>
                </div>
            </div>
            }
        </>
    )
};

export default Checkout;
