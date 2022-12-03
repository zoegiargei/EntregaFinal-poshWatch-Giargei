import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import { useContext } from "react";

const CartWidget = () => {

    const { getItemQuantity } = useContext(CartContext)

    return(
        <Link to={"/Cart"}>
            <div className="cartWidget__container">
                <FaShoppingCart className="cartWidget"/>
                {getItemQuantity() >= 1 && <p className="totalCant">{getItemQuantity()}</p>}
            </div>
        </Link>
    );
};

export default CartWidget;