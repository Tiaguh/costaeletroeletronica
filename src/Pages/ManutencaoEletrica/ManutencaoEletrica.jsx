import React from "react";
import "./ManutencaoEletrica.css";

import Header from "../../components/Header/Header";
import Footer from '../../components/Footer/Footer';
import CarouselEletrica from '../../components/Carousel-Eletrica/Carousel-Eletrica'

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

                <div className="title-container">
                    <h1>Manutenção de Elétrica</h1>

                    <h2>Experiências</h2>
                </div>

                <CarouselEletrica />

                <div className="container-all-retangles-eletric" >

                    <div className="container-retangles-eletric">

                        <div className="rectangles-eletric">
                            <p>Manutenção elétrica nas academias
                            Gigants Grin e Aquademia</p>
                        </div>

                        <div className="rectangles-eletric">
                            <p>Manutenção: Colégio Portal Ideal</p>
                        </div>
                        <div className="rectangles-eletric">
                            <p>Instalação elétrica nova e</p>
                            <p>manutenção particulares em várias regiões</p>
                        </div>
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
