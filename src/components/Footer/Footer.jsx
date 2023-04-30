import React from "react";
import "./Footer.css"

export default function Footer() {
    return (
        <div className="footer-container">

            <div className="meios-de-contato-container">
                <h1>Contatos</h1>

                <div className="meios-de-contato">
                    <p>email</p>
                    <p>telefone</p>
                    <p>redes socias</p>
                </div>
            </div>

            <div className="texto-container">
                <p>texto</p>
            </div>
        </div>
    )
}