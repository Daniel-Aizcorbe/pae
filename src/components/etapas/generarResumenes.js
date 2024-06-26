const getResumenDiagnosticos = (diagnosticosSeleccionados) => {
    return `En base a las necesidades observadas, se diagnostica\n${diagnosticosSeleccionados.map(d => `> ${d.nombre}`).join('\n')}`;
}

const getResumenEjecucion = (marcadores, acciones) => {

    const operacionesRealizadas = marcadores.map(m => m.text) || "";

    return `Se realizaron las siguientes prácticas en el paciente:\n${operacionesRealizadas.map(o => `${operacionesRealizadas.indexOf(o) + 1}. ${o}`).join("\n")}`
        + `\n\nSe realizaron las diferentes acciones:\n${acciones.map(a => `> ${a.diagnostico}\n${a.acciones.map(as => `  * ${as.nombre}`).join("\n")}`).join("\n")}`;
}

const getResumenPlaneacion = (diagnosticosOrdenados) => {
    return `Se priorizan los diagnósticos según su urgencia\n${diagnosticosOrdenados.map(n => `${(diagnosticosOrdenados.indexOf(n) + 1) + ". " + n.nombre}`).join('\n')}`;
}

const getResumenValoracion = (necesidadesSeleccionadas, exploracionFisica) => {

    let resumenEtapasExploracion = (exploracionFisica.inspeccion.text === "" ? "" : `${exploracionFisica.inspeccion.text}\n`)
        + (exploracionFisica.auscultacion.text === "" ? "" : `${exploracionFisica.auscultacion.text}\n`)
        + (exploracionFisica.percusion.text === "" ? "" : `${exploracionFisica.percusion.text}\n`)
        + (exploracionFisica.palpacion.text === "" ? "" : `${exploracionFisica.palpacion.text}\n`);

    let necesidades = `Se identificaron las siguientes necesidades del paciente\n${necesidadesSeleccionadas.map(n => `> ${n.nombre}`).join('\n')}`;
    let resumen = resumenEtapasExploracion
        + necesidades;

    return resumen;
}

const getResumenFinal = (resumenes) => {

    const resumenFinal = resumenes.join("\n")
    console.log(resumenFinal);

    return resumenFinal;
}

export {
    getResumenDiagnosticos,
    getResumenEjecucion,
    getResumenPlaneacion,
    getResumenValoracion,
    getResumenFinal
}