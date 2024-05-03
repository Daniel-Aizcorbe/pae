import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    valoracion: {
        completada: false,
        resumen: ""
    },
    diagnostico: {
        completada: false,
        resumen: ""
    },
    planeacion: {
        completada: false,
        resumen: ""
    },
    ejecucion: {
        completada: false,
        resumen: ""
    },
    evaluacion: {
        completada: false,
        resumen: ""
    },
}

const reducers = {
    completarEtapa: (state, action) => {
        console.log(action.payload);
        const { etapa, completada, resumen } = action.payload;
        state[etapa].completada = completada;
        state[etapa].resumen = resumen;
    },
};

const etapasSlice = createSlice(
    {
        name: "estadoEtapas",
        initialState: initialState,
        reducers: reducers
    }
);

export const { completarEtapa } = etapasSlice.actions;
export default etapasSlice.reducer;