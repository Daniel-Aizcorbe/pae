import { Table } from 'antd'
import React from 'react'
import { evolucionar } from '../../store/slices/paciente';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const { v4: uuidv4 } = require('uuid');

const tableStyles = {
    width: "100%",
    height: "100%",
    overflowY: "scroll"
};

const columns = [
    {
        title: "Nombre completo",
        dataIndex: "nombreCompleto",
        key: "nombreCompleto"
    },
    {
        title: "Nacimiento",
        dataIndex: "fechaNac",
        key: "fechaNac"
    },
]

const getItem = (item) => {
    return {
        key: uuidv4(),
        nombreCompleto: item.nombre + " " + item.apellido,
        fechaNac: item.fechaNac,
        nombre: item.nombre,
        apellido: item.apellido
    }
}



export const ListaPacientes = ({ pacientes, closeModal }) => {

    const dispatch = useDispatch();

    const navegar = useNavigate();

    const handleClick = (fila) => {
        dispatch(
            evolucionar(
                {
                    nombre: fila.nombre,
                    fechaNac: fila.fechaNac,
                    apellido: fila.apellido
                }
            )
        );
        closeModal();
        navegar("/evolucion");
    }

    return (
        <Table
            bordered
            dataSource={pacientes.map(p => getItem(p))}
            columns={columns}
            style={tableStyles}
            pagination={false}
            size='large'
            onRow={(fila) => ({
                onClick: () => handleClick(fila),
            })}
            rootClassName="lista-pacientes"
        />
    )
}
