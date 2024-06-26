import { getNombreCompletoFormateado } from "../buscar-paciente/utilsBusqueda";

const reemplazarVocalesConTilde = (nombre) => {
    return nombre.replace(/[áÁ]/g, 'a')
        .replace(/[éÉ]/g, 'e')
        .replace(/[íÍ]/g, 'i')
        .replace(/[óÓ]/g, 'o')
        .replace(/[úÚ]/g, 'u');
}

const formatNombre = (nombre) => {
    let nombreFormateado = reemplazarVocalesConTilde(nombre).toUpperCase();

    return nombreFormateado;
}

/**
 * 
 * @param {} nombre 
 * @returns String// ! RETORNA LO MISMO QUE formatNombre
 */
const formatApellido = (nombre) => {

    return formatNombre(nombre);
}

/**
 * 
 * @param { nombre, apellido, fechaNac} paciente 
 * @returns { nombre, apellido, fechaNac} con los valores nombre y apellido en mayúscula y sin tildes
 */

const formatDatosPaciente = (paciente) => {

    return {
        nombre: formatNombre(paciente.nombre),
        apellido: formatApellido(paciente.apellido),
        fechaNac: paciente.fechaNac
    }
}

const mensajePacienteRegistrado = (paciente) => {
    const nombreCompleto = getNombreCompletoFormateado(paciente);
    return `El paciente ${nombreCompleto} ya se encuentra registrado con la fecha de nacimiento ${paciente.fechaNac}`;
}

const mensajeRegistroCompletado = (paciente) => {

    const nombreCompleto = getNombreCompletoFormateado(paciente);
    return `¡Se ha registrado a ${nombreCompleto} correctamente!`;
}

const ERROR = "Error al registrar paciente";
const WARNING = "Paciente ya registrado";
const SUCCED = "Se registró al paciente con exito";

export { formatDatosPaciente, mensajePacienteRegistrado, ERROR, SUCCED, WARNING, formatNombre, mensajeRegistroCompletado }
