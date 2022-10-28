import iconoMenu from '../../svg/nav__menu.svg';
import closeMenu from '../../svg/nav__close.svg';
import ItemList from '../ItemList/ItemList';
import CartWidget from '../CartWidget/CartWidget';

const NavBar = ( props ) => {
    
    return(
        <nav className="nav container">
            <div className="nav__logo">
                { props.logo }
                {/* <img src={ props.logo } alt="Logo de Ecommerce" className="logo"/> */}
            </div>

            <ul className="nav__link nav__link--menu">

                { 
                    (props.opciones).map(opt => <ItemList opcion={ opt }  />)
                }

                <li className="nav__items nav__link--menu">
                    <a className="nav__links" href="#">
                        <CartWidget />
                    </a>
                </li>
                
                <img src={ closeMenu } alt="botón X para cerrar menú lateral" className="nav__close"/>
            </ul>

            <div className="nav__menu">
                <img src={ iconoMenu } alt="botón hamburguesa para abrir menu lateral" className="nav__img"/>
            </div>
        </nav>
    );
};

export default NavBar;