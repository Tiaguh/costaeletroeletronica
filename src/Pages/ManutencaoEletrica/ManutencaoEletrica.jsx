import React from "react";
import Header from "../../components/Header/Header";
import "./ManutencaoEletrica.css"

export default function ManutencaoEletrica() {
    return (
        <div>
            <Header />

            <div className="experience-container">

                <div className="title-container">
                    <h1>Manutenção de Elétrica</h1>

                    <h2>Experiências</h2>
                </div>

                <div className="container-experience">
                    <div className="rectangle" />
                    <div className="rectangle" />
                    <div className="rectangle" />
                    <div className="rectangle" />
                </div>

                <div className="title-container">
                    <h1>Conhecimento em:</h1>
                </div>

                <div className="container-knowledge">
                    <div className="square" />
                    <div className="square" />
                    <div className="square" />
                    <div className="square" />
                </div>

            </div>

        </div>
    )
}