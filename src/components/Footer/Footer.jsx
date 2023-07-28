import React from "react";
import "./Footer.css"

import Instagram from "./img/instagram-icon.png"

export default function Footer() {
    return (
        <div
            className="footer-container"
            id="footer"
        >

            <div className="footer-content">

                <div className="meios-de-contato-container">
                    <h1>Contatos</h1>

                    <div className="meios-de-contato">

                        <div className="info-container">
                            <h3>email:</h3>
                            <p>cfcosta100@gmail.com</p>
                        </div>

                        <div className="info-container">
                            <h3>telefone</h3>
                            <p>(11) 97023-6863</p>
                        </div>

                        <div className="instagram-container">
                            <img className="instagram-icon" src={Instagram} />
                            <p>@tecnico.claudemir</p>
                        </div>
                    </div>
                </div>

                <div className="texto-container">
                    <p>Estou disponível para novos projetos no momento. Entre em contato comigo e marcamos uma conversa. </p>
                    <p>Para orçamentos de órgãos, por favor mandar um pequeno vídeo do instrumento relatando o defeito, marca e região em que reside.</p>
                </div>

            </div>

            <div className="direitos">
                <p>Costa Elétrica e Eletrônica ©. Todos os direitos reservados</p>
            </div>
        </div>
    )
}