import '../styles.scss';
import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Header from './Header/Header';
import ItemListContainer from './ItemListContainer/ItemListContainer';
import Cart from './Cart/Cart';
import ItemDetailContainer from './ItemDetailContainer/ItemDetailContainer';

function App() {
  return (
    
    <div className='app'>

      <BrowserRouter>
      
        <Header h1='Encontrá tu reloj' p='En el momento justo' btn="Collection" />
        
        <Routes>

          <Route path='/' element={ <ItemListContainer /> }></Route>
          <Route path='/product/:id' element={<ItemDetailContainer /> }></Route>
          <Route path='/Cart' element={<Cart /> }></Route>
          <Route path='/category/:category' element={<ItemListContainer /> }></Route>

        </Routes>

      </BrowserRouter>

    </div>

  );
}

export default App;
