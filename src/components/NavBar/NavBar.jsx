import { Link } from 'react-router-dom';

import iconoMenu from '../../svg/nav__menu.svg';
import closeMenu from '../../svg/nav__close.svg';
import CartWidget from '../CartWidget/CartWidget';
import ItemNavbar from '../ItemNavbar/ItemNavbar';

const NavBar = ( props ) => {
    
    return(
        <nav className="nav container">
            <Link className="nav__logo" to="/">
                { props.logo }
            </Link>

            <ul className="nav__link">

                <li className='nav__items'>
                    <Link className='nav__links' to={"/"}>Home</Link>
                </li>

                {
                    (props.opciones).map(opt => <ItemNavbar opcion={ opt } to={`/category/${opt}`} />)
                }

                <li className="nav__items">
                    <Link className="nav__links" to={"/Cart"}>
                        <CartWidget />
                    </Link>
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