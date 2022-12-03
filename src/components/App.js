import '../styles.scss';
import 'bootstrap/dist/css/bootstrap.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Header from './Header/Header';
import ItemListContainer from './ItemListContainer/ItemListContainer';
import Cart from './Cart/Cart';
import ItemDetailContainer from './ItemDetailContainer/ItemDetailContainer';
import BrandBar from './BrandBar/BrandBar';
import Checkout from './Checkout/Checkout';
import Footer from './Footer/Footer'

//Context
import { CartContextProvider } from '../context/CartContext';
import { FavContextProvider } from '../context/FavContext';

//Toastify
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Favorites from './Favorites/Favorites';

function App() {

  return (
    
    <div className='app'>

      <FavContextProvider>
        <BrowserRouter>

          <CartContextProvider>
            
            <Header h1='Encontrá tu reloj' p='En el momento justo' btn="Collection" />
            <BrandBar />


              <Routes>
                <Route exact path='/' element={ <ItemListContainer /> } ></Route>
                <Route path='/product/:id' element={<ItemDetailContainer /> } ></Route>
                <Route path='/Cart' element={<Cart /> } ></Route>
                <Route exact path='/category/:category' element={<ItemListContainer /> } ></Route>
                <Route path='/brand/:brand' element={<ItemListContainer /> } ></Route>
                <Route path='/Favorites' element={<Favorites /> } ></Route>
                <Route path='/checkout' element={<Checkout /> }></Route>
                <Route path='*' element={<div className="container"><h1>Ruta inexistente</h1></div>} />
              </Routes>
              

            <ToastContainer/>
            
            <Footer />

          </CartContextProvider>

        </BrowserRouter>
      </FavContextProvider>
        
    </div>

  );
}

export default App;
