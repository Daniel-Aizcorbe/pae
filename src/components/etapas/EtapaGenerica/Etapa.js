import React, { useState } from 'react'

import { message } from 'antd';

import BotonIngresarEtapa from './BotonIngresarEtapa';
import { BotonEtapaDeshabilitado } from './BotonEtapaDeshabilitado';
import { AZUL_PRIMARIO, VERDE } from '../../datos/colores';

function quitarTildes(texto) {
    return texto
        .replace(/[áÁ]/g, 'a')
        .replace(/[éÉ]/g, 'e')
        .replace(/[íÍ]/g, 'i')
        .replace(/[óÓ]/g, 'o')
        .replace(/[úÚ]/g, 'u');
}

export const Etapa = ({ completada, etapa, sePuedeCompletar, nextPage, rotar }) => {

    const [messageApi, contextHolder] = message.useMessage();
    const [mensajeMostrado, setMensajeMostrado] = useState(false);

    const showInfoMessage = () => {
        if (!mensajeMostrado) {
            setMensajeMostrado(true);
            messageApi.open({
                type: 'info',
                content: '¡Hay etapas anteriores que no fueron completadas!',
                duration: 5,
                style: {
                    fontSize: "15px",
                    marginTop: "60px",
                },
                onClose: () => setMensajeMostrado(false)
            });
        }
    }
    return (
        <>
            {
                sePuedeCompletar ?
                    <BotonIngresarEtapa
                        nextPage={nextPage}
                        etapa={etapa}
                        classes={quitarTildes(etapa.toLowerCase())}
                        bgColor={completada ?  VERDE : AZUL_PRIMARIO}
                        rotar={rotar}
                    />
                    :
                    <BotonEtapaDeshabilitado
                        classes={quitarTildes(etapa.toLowerCase())}
                        openMessage={showInfoMessage}
                        etapa={etapa}
                        rotar={rotar}
                    />
            }
            {contextHolder}
        </>
    )
}
