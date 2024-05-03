import { Button, Modal, message } from 'antd'
import React, { useEffect, useState } from 'react'
import { Rows, Columns } from '../../../utils/containers/Containers'
import { ParrafoEditable } from './ParrafoEditable'
import { copyToClipboard } from './copyToClipboard'
import { useSelector } from 'react-redux'

const containerStyle = {
    minHeight: "400px",
}

const ModalCopiar = ({ open, close }) => {

    const etapas = useSelector(state => state.estadoEtapas);
    let resumen = Object.values(etapas).map(e => e.resumen).join("\n");

    const [editableText, setEditableText] = useState(resumen);
    const [messageApi, contextHolder] = message.useMessage();

    useEffect(() => {
        // Actualiza editableText cada vez que resumen cambie
        setEditableText(resumen);
    }, [resumen]);

    const informarError = () => {
        messageApi.error("¡Ups! no se pudo copiar ☹, intentelo manualmente", 3)
    }

    const informarSuccess = () => {
        messageApi.success("¡Copiado!", 3)
    }

    const copiar = () => {
        copyToClipboard(editableText, informarSuccess, informarError);
    }

    return (
        <Modal
            open={open}
            footer={[]}
            style={containerStyle}
            centered
            closable
            maskClosable={false}
            onCancel={close}
            width={"60%"}
            destroyOnClose
        >
            <Columns
                padding="1.5rem 1rem 0 1rem"
                elementPosition="top-center"
                width="100%"
            >
                <ParrafoEditable
                    editableText={editableText}
                    setEditableText={setEditableText}
                />
                <Rows
                    height="60px"
                    width="70%"
                    elementPosition="bottom-center"
                >
                    <Button
                        size='large'
                        type='default'
                        style={{ width: "8rem", marginRight: "8rem" }}
                        onClick={() => setEditableText(resumen)}
                    >
                        restaurar
                    </Button>
                    <Button
                        size='large'
                        type='primary'
                        onClick={copiar}
                        style={{ width: "8rem" }}
                    >
                        copiar
                    </Button>
                </Rows>
            </Columns>
            {contextHolder}
        </Modal>
    )
}

export default ModalCopiar
