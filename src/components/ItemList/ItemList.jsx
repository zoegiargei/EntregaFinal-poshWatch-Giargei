import Item from "../Item/Item";

const ItemList = ({productsList}) => {
    
    return (
        <>
            {productsList.map(product => <Item key={ product.id } reloj={ product } />)}
        </>
    );
}

export default ItemList;
