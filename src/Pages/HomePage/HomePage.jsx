import React from "react"
import "./HomePage.css"
import Header from "../../components/Header/Header"
import Footer from "../../components/Footer/Footer"

export default function HomePage() {
    return (
        <div>
            <Header />

            <div className="infos">

                <div className="foto-container">
                    <p>Foto Pessoal</p>
                </div>

                {/* <div>
                    <p>Nome</p>
                    <p>Idade</p>
                    <p>Profissões</p>
                </div> */}
                
            </div>

            <div className="button-container">
                <button className="button-type-1">
                    <p>Baixar Curriculo</p>
                </button>
            </div>

            <div className="servicos-container">
                <div>
                    <h1>Serviços</h1>
                </div>

                <div className="buttons-container">
                    <button className="button-type-2">
                        <p>Baixar Curriculo</p>
                    </button>

                    <button className="button-type-2">
                        <p>Baixar Curriculo</p>
                    </button>
                </div>
            </div>

            <Footer />

        </div>
    )
}