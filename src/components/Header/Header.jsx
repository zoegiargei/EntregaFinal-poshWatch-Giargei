import NavBar from '../NavBar/NavBar';
import Cta from '../Cta/Cta';

const Header = (props) => {

    let opcionesMenu = ["Woman", "Man", "Collection", "Contact"]
    let logo = "Posh Watch"

    return(
        <header className="hero">

            <NavBar logo={ logo } opciones= { opcionesMenu } />

            <section className="hero__container container">

                <h1 className="hero__title"> { props.h1 } </h1>
                <p className="hero__paragraph"> { props.p } </p>
                <Cta href="#" cta="Collection" />
            </section>
        </header>
    );
};

export default Header;