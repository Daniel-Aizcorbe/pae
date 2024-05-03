import TextArea from "antd/es/input/TextArea";
import React, { useState } from "react";
import { Columns } from "../../utils/containers/Containers";
import { Button } from "antd";
import { EditTwoTone, SaveTwoTone } from "@ant-design/icons";

const ParrafoEvolucion = ({ text, setText, editable, saveText, etapa }) => {

    const [seEstaEditando, setSeEstaEditando] = useState(false);
    const [textoTemporal, setTextoTemporal] = useState(text + "\n");

    const iconoEditable = <EditTwoTone />;
    const iconoGuardar = <SaveTwoTone />;

    const editar = () => {
        setSeEstaEditando(true);
    }

    const guardar = () => {
        setSeEstaEditando(false);
        setText(textoTemporal);
        saveText(etapa, textoTemporal);
    }

    return (
        <Columns
            elementPosition={"top-left"}
            width="100%"
            height="100%"
        >
            <Columns
                elementPosition={"top-right"}
                width="100%"
                height="100%"
            >
                <TextArea
                    autoSize
                    value={textoTemporal}
                    onChange={event => setTextoTemporal(event.target.value)}
                    size="large"
                    style={{
                        fontSize: "1rem",
                        backgroundColor: "inherit",
                        color: "black",
                    }}
                    disabled={!seEstaEditando}
                    variant="outline"
                />
                {
                    editable ?

                        seEstaEditando ? <Button
                            type="primary"
                            icon={iconoGuardar}
                            onClick={guardar}
                        >
                            Guardar
                        </Button> : <Button
                            type="default"
                            icon={iconoEditable}
                            onClick={editar}
                        >
                            Editar
                        </Button>
                        : ""
                }
            </Columns>
        </Columns>

    );
}

export { ParrafoEvolucion }