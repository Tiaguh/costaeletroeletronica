import React, { useState, useEffect } from "react"
import "./Header.css"

import { Link } from "react-router-dom";

import navbar from './img/navbar.png';

export default function Header() {
    const [visible, setVisible] = useState(false)

    const scrollToFooter = () => {
        const section = document.getElementById('footer');
        section.scrollIntoView({ behavior: 'smooth' });
    };

    const scrollToServices = () => {
        const section = document.getElementById("services");
        if (section) {
            section.scrollIntoView({ behavior: "smooth" });
        }
    };

    useEffect(() => {
        if (window.location.hash === "#services") {
            scrollToServices();
        }
    }, []);

    return (
        <div className="cabecalho-container">

            <header className="cabecalho">
                <Link
                    to="/"
                    className="link"
                >
                    <h1>Costa Elétrica e Eletrônica</h1>
                </Link>

                <div className="cabecalho-itens" >
                    <Link
                        to="/#services"
                        className="link"
                        onClick={scrollToServices}
                    >
                        Serviços
                    </Link>

                    <p>|</p>

                    <Link
                        className="link"
                        onClick={() => scrollToFooter()}
                    >
                        Contato
                    </Link>

                    <p>|</p>

                    <Link
                        className="link"
                        to="/manutenção-orgãos"
                    >
                        Órgãos
                    </Link>

                    <p>|</p>

                    <Link
                        to="/manutenção-elétrica"
                        className="link"
                    >
                        Elétrica
                    </Link>
                </div>
            </header>

            <header className="cabecalho-responsive">
                <Link
                    to="/"
                    className="link"
                >
                    <h1>Costa Elétrica e Eletrônica</h1>
                </Link>

                <button onClick={() => setVisible(!visible)}>
                    <img src={navbar} />
                </button>

            </header>

            <div className={visible ? "navbar-activated" : "navbar-not-activated"}>

                <Link
                    to="/"
                    className="link"
                >
                    Home
                </Link>

                <Link
                    onClick={() => scrollToFooter()}
                    className="link"
                >
                    Contato
                </Link>

                <Link
                    to="/manutenção-orgãos"
                    className="link"
                >
                    Órgãos
                </Link>

                <Link
                    to="/manutenção-elétrica"
                    className="link"
                >
                    Elétrica
                </Link>

            </div>

        </div>
    )
}

