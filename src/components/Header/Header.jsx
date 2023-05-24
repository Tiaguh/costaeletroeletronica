import React from "react"
import "./Header.css"

export default function Header() {
    return (
        <header className="cabecalho">
            <div>
                <h1>Costa Elétrica e Eletrônica</h1>
            </div>

            <div className="cabecalho-itens" >
                <p>Serviços</p>
                <p>|</p>
                <p>Contato</p>
                <p>|</p>
                <p>Orgãos</p>
                <p>|</p>
                <p>Elétrica?</p>
            </div>
        </header>
    )
}

