// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getFirestore, collection, addDoc, getDocs, getDoc, doc, updateDoc, deleteDoc} from "firebase/firestore";
//consulto la base de datos, creo una colección, y agrego un nuevo obj.

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

// apiKey: "AIzaSyBBc_kSncVxX5YHS_9h4L0HEQLEy-IxEtE"
const firebaseConfig = {
    apiKey: process.env.API_KEY,
    authDomain: "poshwatch-react2022.firebaseapp.com",
    projectId: "poshwatch-react2022",
    storageBucket: "poshwatch-react2022.appspot.com",
    messagingSenderId: "1067130230549",
    appId: "1:1067130230549:web:b3c4746bbb308cb1897b1c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore()

const cargarBDD = async () => {
    const promise = await fetch("./json/products.json")
    const products = await promise.json()
    products.forEach(async (prod) => {
        await addDoc(collection(db, "products"), {
            categoria: prod.category,
            marca:  prod.marca,
            idMarca: prod.idMarca,
            modelo: prod.modelo,
            material: prod.material,
            genero: prod.genero,
            movimiento: prod.movimiento,
            precio: prod.precio,
            stock: prod.stock,
            img: prod.img
        })
    });
}

const getProducts = async() => {
    const products = await getDocs(collection(db, "products"))
    const items = products.docs.map(prod => {return{...prod.data(), id: prod.id}})
    return items
}

const getProduct = async(id) => {
    const product = await getDoc(doc(db, "products", id))
    let item
    if(product.data()){
        item ={...product.data(), id: product.id}
    } else {
        item = "Producto no encontrado"
    }

    return item
}

const createProduct = async (objProduct) => {
    const state = await addDoc(collection(db, "products"), {
        categoria: objProduct.category,
        marca: objProduct.marca,
        idMarca: objProduct.idMarca,
        modelo: objProduct.modelo,
        material: objProduct.material,
        genero: objProduct.genero,
        movimiento: objProduct.movimiento,
        precio: objProduct.precio,
        stock: objProduct.stock,
        img: objProduct.img
    })

    return state
}

const updateProduct = async(id, info) => {
    const state = await updateDoc(doc(db, "products",id), info)
    return state
}

const deleteProduct = async(id) => {
    const state = await deleteDoc(doc(db, "products", id))
    return state
}

//

const createBuyOrder = async(client, priceTotal, date) => {
    const buyOrder = await addDoc(collection(db, "buyOrder"), {
        nombre: client.nombre,
        apellido: client.apellido,
        email: client.email,
        direccion: client.direccion,
        fecha: date,
        precioTotal: priceTotal
    })

    return buyOrder
}

const getBuyOrder = async(id) => {
    const item = await getDoc(doc(db, "buyOrder", id))
    const buyOrder = {...item.data(), id: item.id, marcaProd: item.marca, cantProd: item.cant}
    return buyOrder
}


export {cargarBDD, getProducts, getProduct, createProduct, updateProduct, deleteProduct, createBuyOrder, getBuyOrder}