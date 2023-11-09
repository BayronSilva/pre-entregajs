function saludar () {
    let nombre = prompt ("Ingrese su nombre")
    alert("Hola " + nombre)
}

saludar ();

class Servicios {
    constructor (nombre, duracion, precio) {
        this.nombre = nombre;
        this.duracion = duracion;
        this.precio = precio;
    }
}

const servicio1 = new Servicios ("kinesiologia", 50, 35000)
const servicio2 = new Servicios ("kinesiologia a domicilio", 50, 50000)
const servicio3 = new Servicios ("masaje de relajacion 30 minutos", 30, 20000)
const servicio4 = new Servicios ("masaje de relajacion 50 minutos", 50, 30000)
const servicio5 = new Servicios ("masaje descontracturante 30 minutos", 30, 20000 )
const servicio6 = new Servicios ("masaje descontracturante 50 minutos", 50, 33000)
const servicio7 = new Servicios ("masaje craneal", 30, 20000)
const servicio8 = new Servicios ("masaje kinesiologo", 50, 35000)
const servicio9 = new Servicios ("recovery plan A", 45, 30000)
const servicio10 = new Servicios ("recovery plan B", 65, 45000)

const atenciones = [servicio1, servicio2, servicio3, servicio4, servicio5, servicio6, servicio7, servicio8, servicio9, servicio10]


function seleccionar () {
    
    let busquedaServicio = prompt ("Ingrese servicio que desea agendar");
    console.log(atenciones.filter ((servicio) => servicio.nombre.includes(busquedaServicio)));
}
seleccionar ();

function precioFinal(valorServicio, descuento = 0.20) {
    if (isNaN(valorServicio) || valorServicio <= 0) {
        alert("Por favor, ingrese un valor válido para el servicio");
        return null;
    }

    let oferta = valorServicio * descuento;
    alert("¡Felicitaciones! Tienes un descuento de $" + oferta);
    return valorServicio - oferta;
}

let confirmacion = true;

do {
    let precioServicio = parseFloat(prompt("Ingrese valor del servicio seleccionado y se le informará el precio con oferta"));
    let valorFinal = precioFinal(precioServicio, 0.20);
    if (valorFinal !== null) {
        alert("El precio final con oferta es $" + valorFinal.toLocaleString());
    }

    let respuesta = prompt("¿Desea ingresar otro precio para calcular?");

    if (respuesta == "no") {
        confirmacion = false;
        alert("Gracias por confiar en nosotros");
    }
} while (confirmacion);
