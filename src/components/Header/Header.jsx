import NavBar from '../NavBar/NavBar';

const Header = ( props ) => {

    let opcionesMenu = ["Woman", "Man"]
    let logo = "Posh Watch"

    return(
        <header className="hero">

            <NavBar logo={ logo } opciones= { opcionesMenu } />

            <section className="hero__container container">

                <h1 className="hero__title"> { props.h1 } </h1>
                <p className="hero__paragraph"> { props.p } </p>
            </section>
        </header>
    );
};

export default Header;