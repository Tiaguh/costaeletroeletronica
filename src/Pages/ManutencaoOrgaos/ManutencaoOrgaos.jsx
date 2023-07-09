import React from "react";
import "./ManutencaoOrgaos.css"

import Header from "../../components/Header/Header";
import Footer from '../../components/Footer/Footer';
import CarouselOrgaos from "../../components/Carousel-Orgaos/Carousel-Orgaos";

import TokaiMd750 from './img/TOKAI MD-750.jpg';
import TOKAIT1 from './img/TOKAI T-1.png';
import TOKAIT1CONCERT from './img/TOKAI T-1 CONCERT.png';
import TOKAID2 from './img/TOKAI D-2.jpg';
import TOKAIMD10 from './img/TOKAI MD-10.jpeg';
import TOKAID3 from './img/TOKAI D-3.jpg';
import TOKAITK100 from './img/TOKAI TK-100.jpg';
import TOKAITX5 from './img/TOKAI TX-5.png';
import TOKAITP88C from './img/TOKAI TP-88C.jpg';
import TOKAITP88S from './img/TOKAI TP-88S.png';
import TOKAITP188M from './img/TOKAI TP-188M.jpg';
import TOKAITP188V from './img/TOKAI TP-188V.png';

import SchiefferMR350 from './img/Schieffer MR-350.png';

export default function ManutencaoOrgaos() {
    return (
        <div>
            <Header />

            <div className="experience-container">

                <div className="title-container">
                    <h1>Manutenção de órgãos</h1>

                    <h2>Experiências</h2>
                </div>

                <CarouselOrgaos />

                <div className="container-all-retangles" >

                    <div className="container-retangles">
                        <div className="rectangles">Atendimento de pedidos de manutenção na Garantia pela Tokai</div>
                        <div className="rectangles">Atendimento fora da Garantia de Órgãos Da Tokai</div>
                        <div className="rectangles">Atendimento de manutenção dos órgãos das Igrejas Congregação Cristã no Brasil de Taboão da Serra, Embu das Artes e Itapecerica da Serra</div>
                    </div>

                </div>

                <div className="title-container">
                    <h1>Conhecimento em órgãos Tokai</h1>
                </div>

                <div className="orgao-container">

                    <div className="orgao">
                        <div className="orgao-img-container">
                            <img src={TokaiMd750} />
                        </div>
                        <p>TOKAI MD-750</p>
                    </div>

                    <div className="orgao">
                        <div className="orgao-img-container">
                            <img src={TOKAIT1} />
                        </div>
                        <p>TOKAI T-1</p>
                    </div>

                    <div className="orgao">
                        <div className="orgao-img-container">
                            <img src={TOKAIT1CONCERT} />
                        </div>
                        <p>TOKAI T-1 CONCERT</p>
                    </div>

                    <div className="orgao">
                        <div className="orgao-img-container">
                            <img src={TOKAID2} />
                        </div>
                        <p>TOKAI D-2</p>
                    </div>

                    <div className="orgao">
                        <div className="orgao-img-container">
                            <img src={TOKAIMD10} />
                        </div>
                        <p>TOKAI MD-10</p>
                    </div>

                    <div className="orgao">
                        <div className="orgao-img-container">
                            <img src={TOKAID3} />
                        </div>
                        <p>TOKAI D-3</p>
                    </div>

                    <div className="orgao">
                        <div className="orgao-img-container">
                            <img src={TOKAITK100} />
                        </div>
                        <p>TOKAI TK-100</p>
                    </div>

                    <div className="orgao">
                        <div className="orgao-img-container">
                            <img src={TOKAITX5} />
                        </div>
                        <p>TOKAI TX-5</p>
                    </div>

                    <div className="orgao">
                        <div className="orgao-img-container">
                            <img src={TOKAITP88C} />
                        </div>
                        <p>TOKAI TP-88C</p>
                    </div>

                    <div className="orgao">
                        <div className="orgao-img-container">
                            <img src={TOKAITP88S} />
                        </div>
                        <p>TOKAI TP-88S</p>
                    </div>

                    <div className="orgao">
                        <div className="orgao-img-container">
                            <img src={TOKAITP188M} />
                        </div>
                        <p>TOKAI TP-188M</p>
                    </div>

                    <div className="orgao">
                        <div className="orgao-img-container">
                            <img src={TOKAITP188V} />
                        </div>
                        <p>TOKAI TP-188V</p>
                    </div>

                </div>

                <div className="title-container">
                    <h1>Conhecimento em órgãos Schieffer</h1>
                </div>

                <div className="orgao-container-isolade">
                    <div className="orgao">
                        <div className="orgao-img-container">
                            <img src={SchiefferMR350} />
                        </div>
                        <p>Schieffer MR-350</p>
                    </div>
                </div>

            </div>

            <Footer />

        </div>
    )
}