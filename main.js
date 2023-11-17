
class Servicio {
    constructor(nombre, duracion, precio) {
        this.nombre = nombre;
        this.duracion = duracion;
        this.precio = precio;
    }
}

const serviciosDisponibles = [
    new Servicio("kinesiologia", 50, 35000),
    new Servicio("kinesiologia a domicilio", 50, 50000),
    new Servicio("masaje de relajacion 30 minutos", 30, 20000),
    new Servicio("masaje de relajacion 50 minutos", 50, 30000),
    new Servicio("masaje descontracturante 30 minutos", 30, 20000),
    new Servicio("masaje descontracturante 50 minutos", 50, 33000),
    new Servicio("masaje craneal", 30, 20000),
    new Servicio("masaje kinesiologo", 50, 35000),
    new Servicio("recovery plan A", 45, 30000),
    new Servicio("recovery plan B", 65, 45000),
];

console.log(serviciosDisponibles);

function saludar() {
    let nombre = prompt("Ingrese su nombre");
    alert("Hola " + nombre);
}
saludar();

function buscarServicio() {
    let serviciosDeseados = [];
    let operacionCancelada = false;

    while (!operacionCancelada) {
        let busqueda = prompt("Ingrese servicio que desea agregar").toLowerCase();

        const encontrados = serviciosDisponibles.filter(servicio => servicio.nombre.toLowerCase().includes(busqueda));

        if (encontrados.length > 0) {
            console.log("Servicios encontrados:");
            encontrados.forEach((servicio, index) =>
                console.log("  " + (index + 1) + ". Nombre: " + servicio.nombre + ", Duración: " + servicio.duracion + " minutos, Precio: $" + servicio.precio)
            );

            let mensaje = "Servicios encontrados:\n";
            encontrados.forEach((servicio, index) =>
                mensaje += "  " + (index + 1) + ". Nombre: " + servicio.nombre + ", Duración: " + servicio.duracion + " minutos, Precio: $" + servicio.precio + "\n"
            );
            alert(mensaje);

            let seleccion = parseInt (prompt("Seleccione el número del servicio que desea agregar:"));

            if (!Number.isNaN(Number(seleccion)) && seleccion >= 1 && seleccion <= encontrados.length) {
                serviciosDeseados.push(encontrados[seleccion - 1]);
            } else {
                alert("Número de servicio no válido. Operación cancelada.");
                operacionCancelada = true;
            }
        } else {
            alert("Servicio no encontrado.");

            let intentarNuevamente = prompt("¿Desea buscar nuevamente? (Ingrese 'si' o 'no')").toLowerCase();
            if (intentarNuevamente !== "si") {
                alert("Operación cancelada.");
                operacionCancelada = true;
            }
        }

        let respuesta = prompt("¿Desea agregar otro servicio? (Ingrese 'si' o 'no')");
        if (respuesta.toLowerCase() !== "si") {
            let revisarServicios = prompt(`Servicios seleccionados:\n${obtenerDetalles(serviciosDeseados)}\n¿Desea revisar y confirmar los servicios seleccionados? (Ingrese 'si' o 'no')`);
            if (revisarServicios.toLowerCase() === "si") {

                const precioTotal = calcularPrecioTotal(serviciosDeseados);
                alert("Servicios seleccionados:\n" + obtenerDetalles(serviciosDeseados) + "\nPrecio total: $" + precioTotal);

                let eliminarServicio = prompt("¿Desea eliminar algún servicio? (Ingrese 'si' o 'no')");
                if (eliminarServicio.toLowerCase() === "si") {

                    let serviciosParaEliminar = prompt(`Servicios seleccionados:\n${obtenerDetalles(serviciosDeseados)}\nIngrese el número del servicio que desea eliminar:`);
                    serviciosParaEliminar = parseInt(serviciosParaEliminar);

                    if (!Number.isNaN(Number(serviciosParaEliminar)) && serviciosParaEliminar >= 1 && serviciosParaEliminar <= serviciosDeseados.length) {
                        const servicioEliminado = serviciosDeseados.splice(serviciosParaEliminar - 1, 1)[0];
                        alert("Servicio " + servicioEliminado.nombre + " eliminado con éxito.");
                    } else {
                        alert("Número de servicio no válido. Operación cancelada.");
                        operacionCancelada = true;
                    }
                }

                let confirmarCompra = prompt("¿Desea confirmar? (Ingrese 'si' o 'no')");
                if (confirmarCompra.toLowerCase() === "si") {
                    alert("Gracias por confiar en nosotros. Hasta luego.");
                    operacionCancelada = true;
                }
            }
            operacionCancelada = true;
        }
    }
}

function calcularPrecioTotal(servicios) {
    return servicios.reduce(function (total, servicio) {
        return total + servicio.precio;
    }, 0);
}

function obtenerDetalles(servicios) {
    return servicios.map(function (servicio) {
        return "Nombre: " + servicio.nombre + ", Duración: " + servicio.duracion + " minutos, Precio: $" + servicio.precio;
    }).join('\n');
}

buscarServicio();