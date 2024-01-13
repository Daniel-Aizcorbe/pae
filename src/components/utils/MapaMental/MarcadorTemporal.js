import React from "react";
import { Marcador } from "./Marcador";

const MarcadorTemporal = ({ marcador, nextId, removeMarcador }) => {
    return (
        <>
            {
                marcador.id != -1 ?
                    <Marcador
                        posX={marcador.x}
                        posY={marcador.y}
                        color={"blue"}
                        numero={nextId}
                        removeMarcador={() => removeMarcador(nextId)}
                    /> : ""
            }
        </>
    );
}

export { MarcadorTemporal }