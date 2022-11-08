import NavBar from '../NavBar/NavBar';
import Cta from '../Cta/Cta';

import { Link } from 'react-router-dom';

const Header = (props) => {

    let opcionesMenu = ["Woman", "Man", "Collection"]
    let logo = "Posh Watch"

    return(
        <header className="hero">

            <NavBar logo={ logo } opciones= { opcionesMenu } />

            <section className="hero__container container">

                <h1 className="hero__title"> { props.h1 } </h1>
                <p className="hero__paragraph"> { props.p } </p>
                <Link to="/Collection">
                    <Cta cta="Collection" />
                </Link>
            </section>
        </header>
    );
};

export default Header;