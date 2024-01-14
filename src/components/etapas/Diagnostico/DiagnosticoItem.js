import React, { useState } from "react";
import { styled } from "styled-components";

const DiagnosticoItem = ({ id, nombre, tipo }) => {
    const [selected, setSelected] = useState(false);

    return (
        <ItemList
            key={id}
            onClick={() => setSelected(!selected)}
            selected={selected}
        >
            {nombre}
        </ItemList>
    );
}

const ItemList = styled.li`
    background-color: ${props => props.selected ? "blue" : "var(--fondo-resaltado)"};
    padding: 1rem 2rem;
    border-radius: 0.5rem;
    margin-bottom: 0.5rem;
    max-width: 40rem;
    width: 100%;
    height: 6rem;
    color: white;
    font-size: 1.5rem;
    cursor: pointer;
    display: flex;
    justify-content: flex-start;
    align-items:center;
`;

export { DiagnosticoItem }