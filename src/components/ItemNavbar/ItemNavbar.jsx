import { Link } from 'react-router-dom';

const ItemNavbar = ( props ) => {
    return(
        <li className="nav__items nav__link--menu">
            <Link className="nav__link" to={ props.to } >
                { props.opcion }
            </Link>
        </li>
    );
};

export default ItemNavbar;