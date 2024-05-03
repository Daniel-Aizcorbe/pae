import { Button } from 'antd'
import React from 'react'

const Copiar = ({ openModal }) => {

    return (
        <Button
            type="primary"
            size="large"
            onClick={openModal}
        >
            Copiar
        </Button>
    )
}

export default Copiar
