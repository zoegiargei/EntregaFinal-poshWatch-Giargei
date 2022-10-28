const ItemList = ( props ) => {
    return(
        <li className="nav__items nav__link--menu">
            <a className="nav__links" href="#">
                { props.opcion }
            </a>
        </li>
    );
};

export default ItemList;