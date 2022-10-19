import '../styles.scss';
import Header from './Header';
import ItemListContainer from './ItemListContainer';

function App() {
  return (
    
    <>
      <Header h1='Encontrá tu reloj' p='En el momento justo' btn="Collection" />
      <ItemListContainer greeting="¡Bienvenidos a Posh Watch relojería!" />
    </>
  );
}

export default App;
