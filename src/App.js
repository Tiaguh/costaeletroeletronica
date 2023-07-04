import HomePage from "../src/Pages/HomePage/HomePage"
import ManutencaoOrgaos from "../src/Pages/ManutencaoOrgaos/ManutencaoOrgaos"
import ManutencaoEletrica from '../src/Pages/ManutencaoEletrica/ManutencaoEletrica';

import "./Global.css"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <div>
       <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/manutenção-orgãos" element={<ManutencaoOrgaos />} />
          <Route path="/manutenção-elétrica" element={<ManutencaoEletrica />} />
        </Routes>
      </Router>
    </div>
  );
}