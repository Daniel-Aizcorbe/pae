import React, { useState } from 'react'
import { Columns } from '../../utils/containers/Containers'
import { useSelector } from 'react-redux';
import { ParrafoEvolucion } from './ParrafoEvolucion';
import { MapaMental } from '../../utils/MapaMental/MapaMental';
import { AZUL_PROFUNDO } from '../../datos/colores';
import { Divider } from 'antd';
import Title from 'antd/es/typography/Title';
import { useDispatch } from 'react-redux';
import { completarEtapa } from '../../../store/slices/etapas';
import ModalCopiar from '../finalizar/modals/ModalCopiar';

const ContenidoBorrador = ({ editable, openModal, closeModal }) => {

    const etapas = useSelector(state => state.estadoEtapas);
    const paciente = useSelector(state => state.paciente);

    const [valoracionTexto, setValoracionTexto] = useState(etapas.valoracion.resumen);
    const [planeacionTexto, setplaneacionTexto] = useState(etapas.planeacion.resumen);
    const [ejecucionTexto, setejecucionTexto] = useState(etapas.ejecucion.resumen);
    const [evaluacionTexto, setevaluacionTexto] = useState(etapas.evaluacion.resumen);

    const resumen = [valoracionTexto, planeacionTexto, ejecucionTexto, evaluacionTexto].join("\n");

    const containerStyle = {
        border: "1px solid " + AZUL_PROFUNDO,
        borderRadius: "15px",
    }

    const dispatch = useDispatch();

    const setResumen = (etapa, resumen) => {
        let dataEtapa = {
            etapa: etapa,
            completado: true,
            resumen: resumen
        }
        dispatch(completarEtapa(dataEtapa));
    }
    return (
        <Columns
            elementPosition={"top-left"}
            width={"1000px"}
            style={containerStyle}
            padding="2rem"
        >
            <Title level={1} style={{ width: "100%", textAlign: "center" }}>
                {paciente.nombreCompleto}
            </Title>
            <ParrafoEvolucion
                etapa={"valoracion"}
                saveText={setResumen}
                text={valoracionTexto}
                setText={setValoracionTexto}
                editable={editable}
            />
            <Divider />
            <MapaMental
                disabled
                mostrarSoloLosDeLaEtapa
                etapa={"valoracion"}
            />
            <Divider />
            <ParrafoEvolucion
                etapa={"planeacion"}
                saveText={setResumen}
                text={planeacionTexto}
                setText={setplaneacionTexto}
                editable={editable}
            />
            <ParrafoEvolucion
                etapa={"ejecucion"}
                saveText={setResumen}
                text={ejecucionTexto}
                setText={setejecucionTexto}
                editable={editable}
            />
            <Divider />
            <MapaMental
                disabled
                mostrarSoloLosDeLaEtapa
                etapa={"ejecucion"}
            />
            <Divider />
            <ParrafoEvolucion
                etapa={"evaluacion"}
                saveText={setResumen}
                text={evaluacionTexto}
                setText={setevaluacionTexto}
                editable={editable}
            />
            <ModalCopiar
                open={openModal}
                close={closeModal}
                value={resumen}
            />
        </Columns>
    )
}

export default ContenidoBorrador
