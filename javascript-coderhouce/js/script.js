//calculador de credito
function calcularCredito() {
    const monto = parseFloat(document.getElementById('monto').value);
    const plazo = parseInt(document.getElementById('plazo').value);
    const tasaAnual = parseFloat(document.getElementById('tasa').value) / 100;

    const tasaMensual = tasaAnual / 12;
    const cuotaMensual = monto * (tasaMensual * Math.pow(1 + tasaMensual, plazo)) / (Math.pow(1 + tasaMensual, plazo) - 1);
    const interesesTotales = cuotaMensual * plazo - monto;
    const costoTotal = cuotaMensual * plazo;

    document.getElementById('cuota-mensual').textContent = cuotaMensual.toFixed(2);
    document.getElementById('intereses-totales').textContent = interesesTotales.toFixed(2);
    document.getElementById('costo-total').textContent = costoTotal.toFixed(2);
}

//calculador de nota final
function calcularNotaFinal() {
    const nombreAlumno = document.getElementById('nombre').value;
    const parcial1 = parseFloat(document.getElementById('parcial1').value);
    const parcial2 = parseFloat(document.getElementById('parcial2').value);
    const notaFinal = parseFloat(document.getElementById('final').value);

    // Realizar el cálculo de la nota final (por ejemplo, ponderando las notas)
    const notaTotal = (parcial1 * 0.4) + (parcial2 * 0.4) + (notaFinal * 0.2);

    // Formatear el resultado
    const resultado = `
        <p>Nombre del alumno: ${nombreAlumno}</p>
        <p>Nota final: ${notaTotal.toFixed(2)}</p>
    `;

    // Mostrar el resultado en el HTML
    document.getElementById('resultado').innerHTML = resultado;
}

