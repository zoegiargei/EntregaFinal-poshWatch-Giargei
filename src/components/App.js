import '../styles.scss';
import 'bootstrap/dist/css/bootstrap.css';

import Header from './Header';
import ItemListContainer from './ItemListContainer';
import SectionOne from './SectionOne';

function App() {
  return (
    
    <>
      <Header h1='Encontrá tu reloj' p='En el momento justo' btn="Collection" />
      <ItemListContainer greeting="¡Bienvenidos a Posh Watch relojería!" />
      <SectionOne />
    </>
  );
}

export default App;
