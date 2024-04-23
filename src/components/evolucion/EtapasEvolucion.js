import React, { useState } from "react";
import { FALTAN_ETAPAS, GENERAR_EVOLUCION, toggleBotonCentral } from "../botones/ToggleBotonCentral";
import { Columns } from "../utils/containers/Containers";
import { useSelector } from "react-redux";
import {
    EtapaDiagnostico,
    EtapaEjecucion,
    EtapaEvaluacion,
    EtapaPlaneacion,
    EtapaValoracion
}
    from "../etapas/EtapaGenerica/Etapas";
import ModalConfirmarFinalizar from "./ModalConfirmarFinalizar";


const EtapasEvolucion = () => {

    const estadoEtapas = useSelector((state) => state.estadoEtapas);
    const [showModal, setShowModal] = useState(false);

    const flag = (estadoEtapas) => {
        const estanTodasCompletadas = Object.values(estadoEtapas).every((etapa) => etapa.completada === true);

        if (estanTodasCompletadas) {
            return GENERAR_EVOLUCION;
        }

        return FALTAN_ETAPAS;

    }

    const finalizar = () => {
        setShowModal(true);
    }

    const closeModal = () => {
        setShowModal(false);
    }

    return (
        <Columns
            elementPosition="top-center"
            margin="5rem"
            width="100%"
            style={{
                maxWidth: "60rem",
                minWidth: "16rem",
                minHeight: "16rem",
                maxHeight: "32rem",
            }}
        >
            <Columns
                elementPosition={"center"}
                height={"200px"}
                width={"100vw"}
            >
                <Columns
                    elementPosition="center"
                    width={"0"}
                    height={"0"}
                    position={"relative"}
                >
                    {toggleBotonCentral(flag(estadoEtapas), finalizar)}
                    <EtapaValoracion
                        completada={estadoEtapas.valoracion.completada}
                    />
                    <EtapaDiagnostico
                        completada={estadoEtapas.diagnostico.completada}
                        sePuedeCompletar={estadoEtapas.valoracion.completada}
                    />
                    <EtapaPlaneacion
                        completada={estadoEtapas.planeacion.completada}
                        sePuedeCompletar={estadoEtapas.diagnostico.completada}
                    />
                    <EtapaEjecucion
                        completada={estadoEtapas.ejecucion.completada}
                        sePuedeCompletar={estadoEtapas.planeacion.completada}
                    />
                    <EtapaEvaluacion
                        completada={estadoEtapas.evaluacion.completada}
                        sePuedeCompletar={estadoEtapas.ejecucion.completada}
                    />
                    <ModalConfirmarFinalizar 
                        open={showModal}
                        closeModal={closeModal}
                    />
                </Columns>
            </Columns>
        </Columns>
    );

}

export { EtapasEvolucion }