import React from "react";
import { useState } from "react";
import { styled } from "styled-components";
import { useNavigate } from "react-router-dom";

const Etapa = ({ hoverStyles, nombre, link, completada, bgcolor, sePuedeCompletar, style, rotar }) => {

    const [nombreBoton, setNombreBoton] = useState(nombre);

    const navegar = useNavigate();

    const goToEtapa = () => {
        navegar(link);
    }

    return (
        <BotonEtapa
            $completada={completada}
            onClick={sePuedeCompletar ? goToEtapa : () => { }}
            onMouseEnter={() => setNombreBoton(completada === true ? "EDITAR" : sePuedeCompletar ? "COMPLETAR" : nombre)}
            onMouseLeave={() => setNombreBoton(nombre)}
            $bgcolor={bgcolor}
            $style={style}
            $rotar={rotar}
            $hoverStyles={hoverStyles}
        >
            <p>{nombreBoton}</p>
        </BotonEtapa>
    );
}

const BotonEtapa = styled.div`
    margin: 0 2.5rem;
    width: 12rem;
    height: 7rem;
    clip-path: polygon(0 0, 100% 0, 85% 60%, 15% 60%);
    -moz-border-radius: 50%;
    -webkit-border-radius: 50%;
    border-radius: 50%;
    background-color: ${props => props.$bgcolor};
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: baseline;
    color: black;
    cursor: pointer;
    color: white;
    font-size: 1.1rem;
    border: none;
    position: absolute;
    ${props => props.$style ?? "" }
    &:hover {
        ${props => props.$hoverStyles ?? "" }
    }
    & p {
        padding: 0.5rem;
        transform: ${props => props.$rotar ? "rotate(180deg);" : ""}
    }
`;

export { Etapa }