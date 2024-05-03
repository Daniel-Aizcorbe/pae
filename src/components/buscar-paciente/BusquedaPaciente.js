import React, { useState } from "react";
import { Columns } from "../utils/containers/Containers";
import { BusquedaNombrePaciente } from "./BusquedaNombrePaciente";
import { ModalDatosPaciente } from "./modal/ModalDatosPaciente";
import { Titulo } from "../utils/Titulos";
import { Button, message } from "antd";
import { useSelector } from "react-redux";
import { tieneNombreSimilar } from "./utilsBusqueda";
import { Link } from "react-router-dom";

const BusquedaPaciente = () => {

    const [nombreBuscado, setNombreBuscado] = useState("");
    const [mensajeMostrado, setMensajeMostrado] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const pacientesRegistrados = useSelector(state => state.pacientesRegistrados);

    const pacientesBuscados = pacientesRegistrados.filter(p => tieneNombreSimilar(p, nombreBuscado));

    const [messageApi, contextHolder] = message.useMessage();

    const mostrarAvisoNombreNoIngresado = () => {
        if (!mensajeMostrado) {
            setMensajeMostrado(true);
            messageApi.open({
                type: 'warning',
                content: "Ingrese el nombre y apellido",
                duration: 2,
                style: {
                    fontSize: "15px",
                    marginTop: "60px",
                },
                onClose: () => setMensajeMostrado(false)
            });
        }
    }

    const mostrarMensajeNombreNoEncontrado = () => {
        if (!mensajeMostrado) {
            setMensajeMostrado(true);
            messageApi.open({
                type: 'error',
                content: `"${nombreBuscado}" no coincide con ningun paciente registrado`,
                duration: 2,
                style: {
                    fontSize: "15px",
                    marginTop: "60px",
                },
                onClose: () => setMensajeMostrado(false)
            });
        }
    }

    const closeModal = () => {
        setShowModal(false);
    }

    const handleModalPaciente = () => {
        if (nombreBuscado === "") {
            mostrarAvisoNombreNoIngresado();
        } else if (pacientesBuscados.length > 0) {
            setShowModal(true);
        } else {
            mostrarMensajeNombreNoEncontrado()
        }
    }

    return (
        <Columns
            elementPosition={"center"}
            height="100vh"
            width="100vw"
            padding={"2rem"}
        >
            <Titulo texto="Evolución de pacientes" />
            <BusquedaNombrePaciente
                onChange={(event) => setNombreBuscado(event.target.value)}
                value={nombreBuscado}
                onSearch={handleModalPaciente}
            />
            <Columns>
                <Link to="/">
                    <Button
                        size="large"
                    >
                        Volver
                    </Button>
                </Link>
            </Columns>
            <ModalDatosPaciente
                closeModal={closeModal}
                openCondition={showModal}
                pacientesRegistrados={pacientesBuscados}
            />
            {contextHolder}
        </Columns>
    );
}

export { BusquedaPaciente }