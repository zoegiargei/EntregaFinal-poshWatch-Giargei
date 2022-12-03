import { useState, createContext } from "react";

const CartContext = createContext([])

const CartContextProvider = (props) => {

    //generamos el estado de Cart
    const [cart, setCart] = useState([])

    //Función para saber si el producto ya está en el cart
    const isInCart = (id) => {
        return cart.find(prod => prod.id === id)
    }

    //Función para agregar producto al cart
    const addItem = (item, amout) => {

        if(isInCart(item.id)) {

            const index = cart.findIndex(prod => prod.id === item.id)
            const aux = [...cart]
            aux[index].cant = amout
            setCart(aux)

        } else {

            const newItem = {
                ...item,
                cant: amout
            }
            setCart([...cart, newItem])
        }
    }

    //Función para limpiar cart
    const clearCart = () => {
        return setCart([])
    }

    //Función para remover item del cart
    const removeItem = (id) => {
        return (setCart(cart.filter(prod => prod.id !== id)))
    }

    //Función para calcular precio total segun cantidad de producto
    const getItemQuantity = () => {
        return cart.reduce((acum, prod) => acum += prod.cant, 0)
    }

    //Función para calcular precio total
    const totalPrice = () => {
        return cart.reduce((acum, prod) => acum += (prod.cant * prod.precio), 0)
    }

    //
    // const consultarStorage = () => {
    //     let cartInStorage = JSON.parse(localStorage.getItem('cart'))
    //     setCart(cartInStorage)
    // }

    // consultarStorage()

    console.log(cart)
    
    return(
        <CartContext.Provider value={{cart, isInCart, addItem, clearCart, removeItem, getItemQuantity, totalPrice}}>
            {props.children}
        </CartContext.Provider>
    )

};

export { CartContextProvider, CartContext }