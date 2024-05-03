import { createSlice } from "@reduxjs/toolkit";
const { v4: uuidv4 } = require("uuid");

/**
 * ? Los objetos paciente tienen las keys
 * * nombre: STRING // ! en mayúsculas y sin tildes
 * * apellidp: STRING // ! en mayúsculas y sin tildes
 * * fechaNac: DD-MM-YYYY
 */

const reducers = {
    registrar: (state, action) => {
        state.push({ id: uuidv4(), ...action.payload })
    },
};

const pacientesRegistradosSlice = createSlice({
    name: "pacientesRegistrados",
    initialState: pacientes,
    reducers: reducers
})

export const { registrar } = pacientesRegistradosSlice.actions;
export default pacientesRegistradosSlice.reducer;