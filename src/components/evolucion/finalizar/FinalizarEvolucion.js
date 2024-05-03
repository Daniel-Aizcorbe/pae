import React, { useState } from "react";
import { Columns } from "../../utils/containers/Containers";
import Title from "antd/es/typography/Title";
import { Flex } from "antd";
import Copiar from "./Copiar";
import { Finalizar } from "./Finalizar";
import ContenidoBorrador from "../borrador/ContenidoBorrador";

const FinalizarEvolucion = () => {

    const [showModalCopiar, setShowModalCopiar] = useState(false);

    const abrirModalCopiar = () => {
        setShowModalCopiar(true);
    }

    return (
        <Columns
            elementPosition={"top-center"}
            padding={"2rem"}
        >
            <Columns
                width={"80%"}
                height={"auto"}
            >
                <Title level={1}>
                    Finalizar
                </Title>
                <ContenidoBorrador
                    editable={true}
                    openModal={showModalCopiar}
                    closeModal={() => setShowModalCopiar(false)}
                />
                <Flex
                    justify="space-between"
                    style={{ width: "30%", padding: "2rem" }}
                >

                    <Copiar
                        openModal={abrirModalCopiar}
                    />
                    <Finalizar

                    />
                </Flex>
            </Columns>
        </Columns>
    );
}

export { FinalizarEvolucion }