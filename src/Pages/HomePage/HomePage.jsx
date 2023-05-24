import React from "react"
import "./HomePage.css"

import Foto from "./img/foto.png"
import Orgao from "./img/orgão.jpg"
import Fios from "./img/fios.jpg"

import Header from "../../components/Header/Header"
import Footer from "../../components/Footer/Footer"

import { RiFileDownloadLine } from "react-icons/ri";

import { Link } from 'react-router-dom';

export default function HomePage() {
    return (
        <div>
            <Header />

            <div className="infos">

                <div className="foto-container">
                    <img className="foto" src={Foto} />
                </div>

                <div className="info">
                    <h3>Seja bem vindo(a)</h3>
                    <h1>Claudemir Ferreira da Costa</h1>
                    <h2>43 anos</h2>
                    <p>Professor, Eletricista e Técnico em Eletrônica (Órgãos)</p>
                    <p>Formado em eletrônica e elétrica pelo SENAI</p>

                    <button className="button-type-1">
                        <RiFileDownloadLine size={26} color={"#131673"} />
                        <p>Certificações</p>
                    </button>

                </div>

            </div>


            <div className="servicos-container">
                <div className="servicos-title" >
                    <h1>Serviços</h1>
                </div>

                <div className="fotos-container">
                    <Link
                        className="orgao-container"
                        to={"/manutenção-orgãos"}
                    >
                        <img className="foto-orgao" src={Orgao} />
                        <p>Manutenção Orgãos</p>
                    </Link>

                    <Link
                        className="fios-container"
                        to={"/manutenção-elétrica"}
                    >
                        <img className="foto-fios" src={Fios} />
                        <p>Manutenção Elétrica</p>
                        
                    </Link>
                </div>
            </div>

            <Footer />

        </div>
    )
}