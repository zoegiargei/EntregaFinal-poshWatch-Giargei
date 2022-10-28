import React from 'react';
import ItemCount from '../ItemCount/ItemCount';

const SectionOne = () => {
    return (
        <div className='container section1'>
            <div className='element elem1'>
            </div>

            <div className='element elem2'>
                reloj
                <ItemCount />
            </div>
        </div>
    );
}

export default SectionOne;
