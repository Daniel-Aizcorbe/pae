import React, { useState } from 'react'
import { Columns, ContentContainer } from '../utils/containers/Containers'
import Title from 'antd/es/typography/Title'

import InputNombre from './inputs/InputNombre'
import InputApellido from './inputs/InputApellido'
import BotonRegistrar from './BotonRegistrar'
import InputFecha from './inputs/InputFecha'
import { Link, useNavigate } from 'react-router-dom'
import { validarApellido, validarFecha, validarNombre } from './inputs/validacionesFormRegistro'
import { AZUL_PRIMARIO } from '../datos/colores'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'

import { registrar } from "../../store/slices/pacientesRegistrados";
import { ModalAvisoRegistro } from './modal/ModalAvisoRegistro'
import { SUCCED, WARNING, formatDatosPaciente, mensajePacienteRegistrado, mensajeRegistroCompletado } from './utilsRegistro'
import { getNombreCompletoFormateado } from '../buscar-paciente/utilsBusqueda'
import { Button, Flex } from 'antd'

const formStyle = {
    width: "600px",
    border: "1px solid " + AZUL_PRIMARIO,
    padding: "2rem",
    borderRadius: "10px",
    maxHeight: "500px"
}

const Registro = () => {

    const [nombre, setNombre] = useState("");
    const [apellido, setApellido] = useState("");
    const [fechaNacimiento, setFechaNacimiento] = useState("");
    const [nombreError, setErrorNombre] = useState({});
    const [apellidoError, setErrorApellido] = useState({});
    const [fechaError, setErrorFecha] = useState({});
    const [showModal, setShowModal] = useState(false);

    /**
     * * El error tiene las keys
     * * type : que refiere si fue un warning o un error,
     */
    const [status, setStatus] = useState({});

    const registrados = useSelector(state => state.pacientesRegistrados)
    const dispatch = useDispatch();
    const navegar = useNavigate();

    const registrarPaciente = (paciente) => {
        console.log("intento registrarlo");
        let pacienteFormateado = formatDatosPaciente(paciente);
        console.log(pacienteFormateado);
        dispatch(registrar(pacienteFormateado))
    }

    const estaRegistrado = (datosPaciente) => {

        let nombreCompleto = getNombreCompletoFormateado(datosPaciente);
        console.log(nombreCompleto);
        console.log(registrados);
        return registrados.some(r => nombreCompleto === getNombreCompletoFormateado(r));
    }

    const onChangeName = (event) => {
        setNombre(event.target.value);
        setErrorNombre({});
    }

    const onChangeSurname = (event) => {
        setApellido(event.target.value);
        setErrorApellido({});
    }

    const onChangeBirthDay = (date) => {
        setFechaNacimiento(date);
        setErrorFecha({});
    }

    const losCamposSonValidos = () => {
        const errorFecha = validarFecha(fechaNacimiento);
        const errorNombre = validarNombre(nombre);
        const errorApellido = validarApellido(apellido);

        if (
            Object.keys(errorFecha).length === 0 &&
            Object.keys(errorNombre).length === 0 &&
            Object.keys(errorApellido).length === 0
        ) {
            return true;
        }

        setErrorApellido(errorApellido);
        setErrorFecha(errorFecha);
        setErrorNombre(errorNombre);
        return false;
    }

    const continuar = () => {

        if (losCamposSonValidos()) {

            const datosPaciente = {
                nombre: nombre,
                apellido: apellido,
                fechaNac: fechaNacimiento
            };

            if (estaRegistrado(datosPaciente)) {
                setStatus(
                    {
                        type: WARNING,
                        message: mensajePacienteRegistrado(datosPaciente)
                    }
                );
                setShowModal(true);
            } else {
                setStatus(
                    {
                        type: SUCCED,
                        message: mensajeRegistroCompletado(datosPaciente)
                    }
                );
                registrarPaciente(datosPaciente);
                setShowModal(true);
            }
        }
    }

    const close = () => {
        setShowModal(false);
        navegar("/");
    }

    return (
        <ContentContainer>
            <Columns
                elementPosition={"center"}
                padding={"3rem"}
                width="100%"
                height="100%"
            >
                <Title level={1} style={{marginBottom: "3rem"}}>
                    REGISTRAR PACIENTE
                </Title>
                <Columns
                    width="100%"
                    height="100%"
                    style={formStyle}
                    elementPosition="top-center"
                >
                    <InputNombre
                        nombre={nombre}
                        onChange={onChangeName}
                        error={nombreError}
                    />
                    <InputApellido
                        apellido={apellido}
                        onChange={onChangeSurname}
                        error={apellidoError}
                    />
                    <InputFecha
                        value={fechaNacimiento}
                        onChange={onChangeBirthDay}
                        error={fechaError}
                    />
                    <Flex
                        justify='space-between'
                        align='center'
                        style={{
                            height: "100%",
                            width: "100%",
                            padding: "4rem"
                        }}
                    >
                        <Link to="/">
                            <Button
                                size='large'
                                style={{
                                    width: "120px"
                                }}
                            >
                                Volver
                            </Button>
                        </Link>
                        <BotonRegistrar
                            onClick={continuar}
                        />
                    </Flex>
                    <ModalAvisoRegistro
                        open={showModal}
                        status={status}
                        close={close}
                    />
                </Columns>
            </Columns>
        </ContentContainer>
    )
}

export default Registro
