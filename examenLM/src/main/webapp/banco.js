let saldo = parseFloat(document.getElementById("saldo").innerText);

function actualizarSaldo() {
    document.getElementById("saldo").textContent = saldo.toFixed(2);
}

function ingresar() {
    let cantidad = parseFloat(document.getElementById("ingreso").value);
    if (isNaN(cantidad) || cantidad < 0) {
        alert("Cantidad no válida.");
        return;
    }
    saldo += cantidad;
    actualizarSaldo();
    document.getElementById("ingreso").value = "";
}

function retirar() {
    let cantidad = parseFloat(document.getElementById("retiro").value);
    if (isNaN(cantidad) || cantidad < 0) {
        alert("Cantidad no válida.");
        return;
    }
    if (cantidad > saldo) {
        alert("No puedes retirar más de lo que tienes en tu cuenta bancaria.");
        return;
    }
    saldo -= cantidad;
    actualizarSaldo();
    document.getElementById("retiro").value = "";
}

function invertir() {
    let inversion = parseFloat(document.getElementById("inversion").value);
    let resultadoDiv = document.getElementById("resultado");

    resultadoDiv.innerHTML = "";

    if (isNaN(inversion)) {
        resultadoDiv.innerHTML = "Introduce un numero valido.";
        return;
    }
    if (inversion <= 0) {
        resultadoDiv.innerHTML = "La inversión debe ser mayor que 0.";
        return;
    }
    if (inversion > saldo) {
        resultadoDiv.innerHTML = "No puedes invertir más de tu saldo.";
        return;
    }

    let interesMensual = 0;

    if (inversion < 1000) {
        interesMensual = 0.01;
    } else if (inversion <= 5000) {
        interesMensual = 0.025;
    } else {
        interesMensual = 0.05;
    }

    let acumulado = inversion;
    let html = "<h3>Evolución mensual:</h3><ul>";

    for (let i = 1; i <= 12; i++) {
        acumulado += acumulado * interesMensual;
        html += `<li>Mes ${i}: ${acumulado.toFixed(2)} €</li>`;
    }

    html += "</ul>";
    resultadoDiv.innerHTML = html;
}



