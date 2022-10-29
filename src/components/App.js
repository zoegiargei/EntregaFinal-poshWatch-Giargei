import '../styles.scss';
import 'bootstrap/dist/css/bootstrap.css';

import Header from './Header/Header';
import ItemListContainer from './ItemListContainer/ItemListContainer';
import Home from './Home/Home';

function App() {
  return (
    
    <>
      <Header h1='Encontrá tu reloj' p='En el momento justo' btn="Collection" />
      <ItemListContainer greeting="¡Bienvenidos a Posh Watch relojería!" />
      <Home />
    </>
  );
}

export default App;
