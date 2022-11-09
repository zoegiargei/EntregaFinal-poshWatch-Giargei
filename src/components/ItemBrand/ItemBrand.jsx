import { Link } from "react-router-dom";

const ItemBrand = (props) => {
    return (
        <li className="brand__item">
            <Link className="brand__link" to={ props.to } >
                { props.opcion }
            </Link>
        </li>
    );
}

export default ItemBrand;
