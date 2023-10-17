function saludar () {
    let nombre = prompt ("Ingrese su nombre")
    alert("Hola " + nombre)
}

saludar ();

function precioFinal (valorMasaje, descuento = 0.20) {
    let oferta = valorMasaje * descuento;
    alert ("Felicitaciones! tienes un descuento de $" + oferta);
    return valorMasaje - oferta;
}

let confirmacion = true;

do {
    let precioMasaje = parseInt(prompt("Ingrese valor del masaje y se le informara precio con oferta"));
    
    let valorFinal = precioFinal (precioMasaje, 0.20);
    alert("El precio final con oferta es $" + valorFinal);

    let respuesta = prompt("¿Desea ingresar otro precio para calcular?");

    if(respuesta == "no") {
        confirmacion = false;
        alert ("Gracias por confiar en nosotros");
    }
} while (confirmacion == true);


