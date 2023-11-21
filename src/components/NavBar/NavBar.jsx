import React from 'react';

import { Link } from 'react-router-dom';

import { useState } from 'react';

import iconoMenu from '../../svg/nav__menu.svg';
import closeMenu from '../../svg/nav__close.svg';
import CartWidget from '../CartWidget/CartWidget';
import ItemNavbar from '../ItemNavbar/ItemNavbar';

const NavBar = React.memo(( props ) => {
    
    const [aux, setAux] = useState(false);

    const openButton = () => {
        setAux(true)
    }

    const closeButton = () => {
        setAux(false)
    }

    return(
        <nav className="nav container">
            <Link className="nav__logo" to="/">
                { props.logo }
            </Link>

            <ul className={aux ? "nav__links nav__links--show" : "nav__links"} >

                <li className='nav__items'>
                    <Link className='nav__link' to={"/"}>Home</Link>
                </li>

                {
                    (props.opciones).map(opt => <ItemNavbar opcion={ opt } to={`/category/${opt}`} />)
                }

                <li className='nav__items'>
                    <Link className='nav__link' to={"/favourite"}>Favorites</Link>
                </li>

                <li className="nav__items">
                    <Link className="nav__link" to={"/Cart"}>
                        <CartWidget />
                    </Link>
                </li>
                
                <img src={ closeMenu } alt="botón X para cerrar menú lateral" className="nav__close" onClick={ closeButton }/>
            </ul>

            <div className="nav__menu">
                <img src={ iconoMenu } alt="botón hamburguesa para abrir menu lateral" className="nav__img" onClick={ openButton } />
            </div>
        </nav>
    );
});

export default NavBar;