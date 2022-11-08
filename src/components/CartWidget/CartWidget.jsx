import { FaShoppingCart } from "react-icons/fa";

import { Link } from "react-router-dom";

const CartWidget = () => {
    return(
        <Link to={"/Cart"}>
            <FaShoppingCart className="cartWidget"/>
        </Link>
    );
};

export default CartWidget;