function calculoInteres(){
    let saldoActual = document.getElementById('monto').value;
    let rendimiento = document.getElementById('rend').value;
    if (saldoActual === "" || rendimiento === "") {
        document.getElementById('inter').textContent = "Por favor, completa todos los campos.";
        return; // Detiene la función si hay campos vacíos
    }
    let S = parseFloat(saldoActual);
    let R = parseFloat(rendimiento);
    let resultado = ( R * 100 / (S-R) ) * 365;
    resultado= resultado.toFixed(1);
    
    document.getElementById('inter').innerText = 'interes aplicado: ' + resultado + '%';
}