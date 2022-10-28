const ItemListContainer = (props) => {
    
    return(
        <section className="section__greeting container">
            <h1 className="greeting__title">
                {props.greeting}
            </h1>
        </section>
    );
};

export default ItemListContainer;