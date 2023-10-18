function calcularAumento(alquilerOriginal, aumentoAnual = 1.15) {
    let aumento = alquilerOriginal * aumentoAnual
    alert("El aumento anual del 115% es de: " + aumento + " pesos.")
    return alquilerOriginal + aumento
}

let confirmacion = true

do {
    let valorAlquiler = parseFloat(prompt("Ingrese el valor en pesos del alquiler actual, asi sabrá cuanto pagará dentro de un año."))

    let aumentoAnual = calcularAumento(valorAlquiler)
    alert("El costo dentro de un año será de: " + aumentoAnual + " pesos.")

    let respuesta = prompt("¿Quiere calcular el aumento anual de otro alquiler?")

    if (respuesta == "no") {
        confirmacion = false
    }

} while (confirmacion == true)
alert("Gracias por usar nuestro servicio.")