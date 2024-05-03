import React from 'react'
import { RouterProvider, createHashRouter } from 'react-router-dom'
import { BusquedaPaciente } from './components/buscar-paciente/BusquedaPaciente';
import { Home } from './components/home/Home';
import Registro from './components/registro-paciente/Registro';
import { Evolucion } from './components/evolucion/Evolucion';
import { Planeacion } from "./components/etapas/Planeacion/Planeacion";
import { Valoracion } from "./components/etapas/Valoracion/Valoracion";
import { Ejecucion } from "./components/etapas/Ejecucion/Ejecucion";
import { Diagnostico } from "./components/etapas/Diagnostico/Diagnostico";
import { Evaluacion } from "./components/etapas/Evaluacion/Evaluacion";
import { Borrador } from "./components/evolucion/borrador/Borrador"
import { PantallaNoDisponible } from "./components/PantallaNoDisponible";
import { FinalizarEvolucion } from "./components/evolucion/finalizar/FinalizarEvolucion";
import { EjecutarAcciones } from "./components/etapas/Ejecucion/EjecutarAcciones";

const router = createHashRouter([
    {
        path: "/",
        element: <Home />,
    },
    {
        path: "/evolucion/paciente",
        element: <BusquedaPaciente />,
    },
    {
        path: '/registro-paciente',
        element: <Registro />
    },
    {
        path: "/evolucion",
        element: <Evolucion />,
    },
    {
        path: "/",
        element: <Home />,
    },
    {
        path: '/evolucion/valoracion',
        element: <Valoracion />
    },
    {
        path: '/evolucion/diagnostico',
        element: <Diagnostico />
    },
    {
        path: '/evolucion/planeacion',
        element: <Planeacion />
    },
    {
        path: '/evolucion/ejecucion',
        element: <Ejecucion />
    },
    {
        path: '/evolucion/evaluacion',
        element: <Evaluacion />
    },
    {
        path: '/evoluciones-anteriores',
        element: <PantallaNoDisponible seccion={2} />
    },

    {
        path: '/evolucion/borrador',
        element: <Borrador />
    },
    {
        path: "/evolucion/finalizar",
        element: <FinalizarEvolucion />
    },
    {
        path: '/evolucion/ejecucion/acciones',
        element: <EjecutarAcciones />
    }
]);

export const Router = () => {
    return (
        <RouterProvider router={router} />
    )
}
