import React from 'react'
import imagen from './cuerpoHumanoMapa.png';

const ImagenMapa = ({ disabled, addMarcadores}) => {
    return (
        <img
            alt='cuerpo-humano'
            src={imagen}
            onClick={disabled ? null : addMarcadores}
            style={{ position: "relative" }}
            draggable={false}
        />
    )
}

export default ImagenMapa
