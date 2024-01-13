import React, { useState } from "react";
import "./planeacion.css";
import { diagnosticos } from "../../datos/datos-diagnostico"
import { Container } from "../../utils/Container/Container";
import { DragDropDiagnostico } from "./DragDropDiagnostico";
import { useNavigate } from "react-router-dom";
import { BotonSiguiente } from "../../botones/BotonSiguiente";


const Planeacion = () => {

    const diagnosticosPrueba = diagnosticos.filter(d => d.tipo == "Fisiológicas");

    return (
        <Container
            direction={"column"}

        >
            <h1>Planeación</h1>
            <h2>Ordene los diagnósticos según su urgencia</h2>
            <DragDropDiagnostico
                diagnosticos={diagnosticosPrueba}
            >

            </DragDropDiagnostico>
            <BotonSiguiente 
                nextPage={"/evolucion"}
            />
        </Container>
    );
}

export { Planeacion }