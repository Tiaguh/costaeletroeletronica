import React from "react";
import "./ManutencaoEletrica.css";

import Header from "../../components/Header/Header";
import Footer from '../../components/Footer/Footer';
import Carrousel from '../../components/Carrousel/Carrousel'

import Lampada from './img/lampadas.png';
import Led from './img/led.png';
import Medidor from './img/medidor.png';
import Tomada from './img/tomada.png';
import Ventilador from './img/ventilador.png'

export default function ManutencaoEletrica() {
    return (
        <div>
            <Header />

            <div className="container-eletric-experience">

                {/* <h1>Videos</h1>
                <Carrousel /> */}

                <div className="title-container">
                    <h1>Manutenção de Elétrica</h1>

                    <h2>Experiências</h2>
                </div>

                <div className="container-all-retangles-eletric" >

                    <div className="container-retangles-eletric">
                        <div className="rectangles-eletric">Manutenção elétrica nas academias <br /> Gigants Grin e Aquademia</div>
                        <div className="rectangles-eletric">Manutenção: Colégio Portal Ideal</div>
                    </div>

                    <div className="container-retangle-eletric">
                        <div className="rectangles-eletric">Instalação elétrica nova e <br /> manutenção particulares em várias regiões</div>
                    </div>

                </div>
                
                <div className="title-container">
                    <h2>Conhecimento em elétrica</h2>
                </div>

                <div className="container-eletric">

                    <div className="eletric">
                        <div className="eletric-img-container">
                            <img src={Tomada} />
                        </div>
                        <p>TOMADAS</p>
                    </div>

                    <div className="eletric">
                        <div className="eletric-img-container">
                            <img src={Ventilador} />
                        </div>
                        <p>VENTILADORES</p>
                    </div>

                    <div className="eletric">
                        <div className="eletric-img-container">
                            <img src={Lampada} />
                        </div>
                        <p>ILUMINAÇÃO</p>
                    </div>

                    <div className="eletric">
                        <div className="eletric-img-container">
                            <img src={Led} />
                        </div>
                        <p>LED</p>
                    </div>

                    <div className="eletric">
                        <div className="eletric-img-container">
                            <img src={Medidor} />
                        </div>
                        <p>LIGAÇÕES ELÉTRICAS</p>
                    </div>

                </div>

            </div>

            <Footer />

        </div>
    )
}