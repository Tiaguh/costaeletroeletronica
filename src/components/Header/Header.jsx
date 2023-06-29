import React, { useState } from "react"
import "./Header.css"

import { Link } from "react-router-dom";

import navbar from './img/navbar.png';

export default function Header() {
    const [visible, setVisible] = useState(false)

    const scrollToServices = () => {
        const section = document.getElementById('services');
        section.scrollIntoView({ behavior: 'smooth' });
    };

    const scrollToFooter = () => {
        const section = document.getElementById('footer');
        section.scrollIntoView({ behavior: 'smooth' });
    };

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
                        className="link"
                        onClick={() => scrollToServices()}
                    >
                        Serviços
                    </Link>

                    <p>|</p>

                    <Link
                        className="link"
                        onClick={() => scrollToFooter()}
                    >Contato
                    </Link>

                    <p>|</p>

                    <Link
                        className="link"
                        to="/manutenção-orgãos"
                    >
                        Orgãos
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
                <h1>Costa Elétrica e Eletrônica</h1>

                <button onClick={() => setVisible(!visible)}>
                    <img src={navbar} />
                </button>

            </header>

            <div className={visible ? "navbar-activated" : "navbar-not-activated"}>
                <p>Serviços</p>
                <p>Contato</p>
                <p>Orgãos</p>
                <p>Elétrica</p>
            </div>

        </div>
    )
}

