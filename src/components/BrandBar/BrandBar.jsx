import ItemBrand from '../ItemBrand/ItemBrand';

const BrandBar = () => {

    let opcionesMarcas = ["Tommy Hilfiger", "Festina", "Citizen", "Fossil", "Tissot"]

    return (
        <div className='brands__container'>

            {
                (opcionesMarcas).map(opt => <ItemBrand opcion={ opt } to={`/brand/${opt}`} />)
            }
        </div>
    );
}

export default BrandBar;
