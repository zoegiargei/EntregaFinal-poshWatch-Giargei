import React from 'react';
import { useState, useEffect } from 'react';
import { databaseQuery } from '../../assets/funciones';

const Home = () => {

    const [relojes, setRelojes] = useState([])

    useEffect(() => {
        databaseQuery().then(reloj => setRelojes(reloj))
    }, []);

    return (
        <div className='container__home'>
            {relojes}
        </div>
    );
}

export default Home;
