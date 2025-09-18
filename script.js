function calcularInteres() {
    // 1. Obtener los valores de los campos HTML
    let capital = document.getElementById('capital').value;
    let porcentaje = document.getElementById('porcentaje').value;
    let dias = document.getElementById('dias').value;

    // 2. Validar que los campos no estén vacíos
    if (capital === "" || porcentaje === "" || dias === "") {
        document.getElementById('resultado').textContent = "Por favor, completa todos los campos.";
        return; // Detiene la función si hay campos vacíos
    }

    // 3. Convertir los valores a números (ya que se obtienen como texto)
    let C = parseFloat(capital);
    let i = parseFloat(porcentaje);
    let d = parseFloat(dias);
    let R = 0;
    let r = C;
    let resultadoIteraciones = ""; // Acumulador para los resultados por línea
    let iteracion = 1;

    // 4. Calcular el monto final usando la fórmula de interés compuesto
    while (d > 0) {
        R = r * (i / 365 * 0.01);
        r = r + R;
        resultadoIteraciones += `Día ${iteracion}: $${r.toFixed(2)} | intereses obtenidos= $${R.toFixed(2)}\n`;
        d = d - 1;
        iteracion++;
    }

    // 5. Redondear el resultado a dos decimales
    let resultadoFinal = r.toFixed(2);

    // 6. Mostrar el resultado de cada iteración y el final
    document.getElementById('resultado').innerText = resultadoIteraciones + `\nEl monto final será de $${resultadoFinal}`;
}