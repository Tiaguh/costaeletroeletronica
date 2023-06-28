import React, { useState } from "react"
import "./Header.css"

import navbar from './img/navbar.png'

export default function Header() {
    const [visible, setVisible] = useState(false)

    return (
        <div className="cabecalho-container">

            <header className="cabecalho">
                <h1>Costa Elétrica e Eletrônica</h1>

                <div className="cabecalho-itens" >
                    <p>Serviços</p>
                    <p>|</p>
                    <p>Contato</p>
                    <p>|</p>
                    <p>Orgãos</p>
                    <p>|</p>
                    <p>Elétrica</p>
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

