
document.addEventListener("DOMContentLoaded", function () {
    const carritoLista = document.getElementById("carrito-lista");
    const precioTotalElemento = document.getElementById("precio-total");

    // Lista de servicios disponibles
    const servicios = [
        { nombre: "Kinesiología Musculoesquelética", precio: 35000 },
        { nombre: "Neurorrehabilitación Adulto", precio: 35000 },
        { nombre: "Kinesiologia respiratoria", precio: 35000 },
        { nombre: "Kinesiología a domicilio", precio: 50000 },
        { nombre: "masaje relajación", precio: 27000 },
        { nombre: "masaje descontracturante", precio: 33000 },
        { nombre: "masaje craneal", precio: 20000 },
        { nombre: "masaje kinesiólogo", precio: 35000 },
        { nombre: "Recovery plan A", precio: 30000 },
        { nombre: "Recovery plan B", precio: 45000 }
    ];

    // Barra de busqueda y operador ternario
    document.addEventListener("input", (e) => {
        if (e.target.matches("#busqueda")) {
            const filtro = e.target.value.toLowerCase();
            document.querySelectorAll(".servicio").forEach((atencion) => {
                atencion.textContent.toLowerCase().includes(filtro)
                    ? atencion.classList.remove("filtro")
                    : atencion.classList.add("filtro");
            });
        }
    });

    // Agregar al carrito
    document.querySelectorAll(".btn-reserva").forEach((botonReserva, index) => {
        botonReserva.addEventListener("click", (e) => {
            e.preventDefault();
            const servicio = servicios[index];
            agregarAlCarrito(servicio);
        });
    });

    // Función para agregar un servicio al carrito
    function agregarAlCarrito(servicio) {
        const nombreServicio = servicio.nombre;
        const listItem = carritoLista.querySelector(`li[data-nombre="${nombreServicio}"]`);

        if (listItem) {
            // Para aumentar cantidad de servicio en carrito
            const cantidadElemento = listItem.querySelector(".cantidad");
            let cantidad = parseInt(cantidadElemento.textContent);
            cantidad++;
            cantidadElemento.textContent = cantidad;
        } else {
            // Si el servicio no está en el carrito, agregarlo
            const listItem = document.createElement("li");

            const eliminarBtn = document.createElement("button");
            eliminarBtn.textContent = "-";
            eliminarBtn.addEventListener("click", () => {
                eliminarDelCarrito(listItem);
            });
            listItem.appendChild(eliminarBtn);

            const cantidadElemento = document.createElement("span");
            cantidadElemento.textContent = "1";
            cantidadElemento.classList.add("cantidad");
            listItem.appendChild(cantidadElemento);

            const agregarBtn = document.createElement("button");
            agregarBtn.textContent = "+";
            agregarBtn.addEventListener("click", () => {
                agregarAlCarrito(servicio);
            });
            listItem.appendChild(agregarBtn);

            const nombreElemento = document.createElement("span");
            nombreElemento.textContent = nombreServicio;
            listItem.appendChild(nombreElemento);

            const precioElemento = document.createElement("span");
            precioElemento.textContent = `$${servicio.precio.toFixed(2)}`;
            listItem.appendChild(precioElemento);

            listItem.setAttribute("data-nombre", nombreServicio);
            listItem.setAttribute("data-precio", servicio.precio);

            carritoLista.appendChild(listItem);
        }

        actualizarPrecioTotal();
    }

    // Función para eliminar un servicio del carrito
    function eliminarDelCarrito(item) {
        const cantidadElemento = item.querySelector(".cantidad");
        let cantidad = parseInt(cantidadElemento.textContent);
        if (cantidad > 1) {
            // Si hay más de un servicio, disminuir cantidad
            cantidad--;
            cantidadElemento.textContent = cantidad;
        } else {
            // Si hay solo un servicio, eliminar el elemento del carrito
            carritoLista.removeChild(item);
        }
        actualizarPrecioTotal();
    }

    // Función para actualizar el precio total en el carrito
    function actualizarPrecioTotal() {
        const itemsEnCarrito = carritoLista.querySelectorAll("li");
        let precioTotal = 0;

        itemsEnCarrito.forEach((item) => {
            const cantidad = parseInt(item.querySelector(".cantidad").textContent);
            const precio = parseFloat(item.getAttribute("data-precio"));
            precioTotal += cantidad * precio;
        });

        precioTotalElemento.textContent = `Precio Total: $${Math.round(precioTotal)}`;
    }

    // Limpiar carrito
    document.getElementById("limpiar-carrito").addEventListener("click", () => {
        carritoLista.innerHTML = "";
        actualizarPrecioTotal();
    });

    // Confirmar compra 
    document.getElementById("confirmar-compra").addEventListener("click", () => {
        alert("Compra confirmada. Nos contactaremos con usted para agendar hora");
    });
});