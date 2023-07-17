import React, { useState } from "react"
import "./HomePage.css";

import Foto from "./img/Foto.svg"
import Orgao from "./img/organ.svg"
import Fios from "./img/fios.svg"

import OrgaoResponsive from "./img/organ-responsive.svg"
import FiosResponsive from "./img/fios-responsive.svg"

import Header from "../../components/Header/Header"
import Footer from "../../components/Footer/Footer"

import { RiFileDownloadLine } from "react-icons/ri";

import { Link } from 'react-router-dom';

import Certifications from './file/Certificações Claudemir Ferreira.pdf'

export default function HomePage() {

    // const handleDownload = () => {
    //     const pdfPath = process.env.PUBLIC_URL + './Certificações Claudemir Ferreira.pdf';

    //     const link = document.createElement('a');
    //     link.href = pdfPath;
    //     link.download = 'Certificações Claudemir Ferreira.pdf';
    //     document.body.appendChild(link);
    //     link.click();
    //     document.body.removeChild(link);
    // };

    const [hover, setHover] = useState(false)

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

                    <a
                        href={Certifications} 
                        download="Certificações Claudemir Ferreira"

                        className={hover ? "button-type-1-hover" : "button-type-1"}
                    >

                        <button
                            onMouseEnter={() => setHover(true)}
                            onMouseLeave={() => setHover(false)}
                        >

                            {hover ?

                                (
                                    <>
                                        <RiFileDownloadLine size={26} color="#FFF" />
                                        <p>Certificações</p>
                                    </>
                                )

                                :

                                (
                                    <>
                                        <RiFileDownloadLine size={26} color="#131673" />
                                        <p>Certificações</p>
                                    </>
                                )
                            }

                        </button>
                    </a>

                </div>

                <div className="info-response">

                    <h3>Seja bem vindo(a)</h3>
                    <h1>Claudemir Ferreira da Costa</h1>
                    <h2>43 anos</h2>
                    <p>Professor, Eletricista e Técnico em Eletrônica (Órgãos)</p>

                    <button className="button-type-1">
                        <RiFileDownloadLine size={26} color="#131673" />
                        <p>Certificações</p>
                    </button>

                </div>

            </div>


            <div
                className="servicos-container"
                id="services"
            >
                <div className="servicos-title" >
                    <h1>Serviços</h1>
                </div>

                <div className="fotos-container">

                    <Link
                        to="/manutenção-orgãos"
                    >
                        <img className="foto-orgao" src={Orgao} />
                    </Link>

                    <Link
                        to="/manutenção-elétrica"
                    >
                        <img className="foto-fios" src={Fios} />
                    </Link>

                </div>
            </div>

            <div className="servicos-container-responsive">
                <div className="servicos-title" >
                    <h1>Serviços</h1>
                </div>

                <div className="fotos-container-responsive">

                    <Link
                        to="/manutenção-orgãos"
                    >
                        <img className="foto-orgao-responsive" src={OrgaoResponsive} />
                    </Link>

                    <Link
                        to="/manutenção-elétrica"
                    >
                        <img className="foto-fios-responsive" src={FiosResponsive} />
                    </Link>

                </div>

            </div>

            <Footer />

        </div>
    )
}