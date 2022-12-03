import React from "react";

import { Link } from "react-router-dom";
import { FaFacebookSquare } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";

const Footer = React.memo(() => {
    return (
        <footer className="footer">

            <section className="container footer__container">
                <nav className="nav nav--footer">
                    <h1 className="footer__title">
                        Posh Watch
                    </h1>

                    <ul className="nav__links nav__link--footer">
                        <li className="nav__items"><Link to={"/"} className="nav__link" >Home</Link></li>
                        <li className="nav__items"><Link to={"/category/Woman"} className="nav__link" >Woman</Link></li>
                        <li className="nav__items"><Link to={"/category/Man"} className="nav__link" >Man</Link></li>
                        <li className="nav__items"><Link to={"/category/Collection"} className="nav__link" >Collection</Link></li>
                    </ul>
                </nav>
            </section>

            <section className="container footer__copy">
                <div className="footer__social">
                    <p className="footer__icons"> <FaFacebookSquare /> </p>
                    <p className="footer__icons"> <FaTwitterSquare /> </p>
                    <p className="footer__icons"> <FaInstagramSquare /> </p>
                </div>

                <h4 className="footer__copyright">Derechos reservados &copy; Giargei Zoe</h4>
            </section>
        </footer>
    )
});

export default Footer;
