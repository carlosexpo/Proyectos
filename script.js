document.addEventListener("DOMContentLoaded", function () {
    // Obtener elementos del DOM
    const formulario = document.getElementById("formulario");
    const boton = document.getElementById("boton");
    const totalElement = document.getElementById("total");
    const estadoElemento = document.getElementById("estado");
    const metodoPago = document.getElementById("metodo-pago");
    const datosTarjeta = document.getElementById("datos-tarjeta");
    const efectivoDiv = document.getElementById("EfectivoDiv");

    // Lógica para calcular el total (solo en index.html)
    if (boton && totalElement) {
        boton.addEventListener("click", function (e) {
            e.preventDefault();

            // Código agregado
const pizzaNombre = pizzaSeleccionada.value;
const pizzaPrecio = parseInt(pizzaSeleccionada.options[pizzaSeleccionada.selectedIndex].dataset.precio);
const cantidadDePizzas = parseInt(cantidadPizza.value);
const totalPizzas = pizzaPrecio * cantidadDePizzas;
        });
    }

    // Mostrar u ocultar datos de la tarjeta (solo en Pago.html)

    if (metodoPago && datosTarjeta && efectivoDiv) {
        metodoPago.addEventListener("change", () => {
            if (metodoPago.value === "Tarjeta") {
                datosTarjeta.style.display = "block";
                efectivoDiv.style.display = "none";
            } else if (metodoPago.value === "Efectivo") {
                datosTarjeta.style.display = "none";
                efectivoDiv.style.display = "block";
            } else {
                datosTarjeta.style.display = "none";
                efectivoDiv.style.display = "none";
            }
        });
    }

    // Función para verificar si el sitio está activo (solo en index.html)
    function esSitioActivo(horaApertura, horaCierre) {
        // Declaración de función fuera del bloque
        const ahora = new Date();
        const horaActual = ahora.getHours();
        return horaActual >= horaApertura && horaActual < horaCierre;
    }

    if (estadoElemento) {
        const horaApertura = 5;
        const horaCierre = 24;

        if (esSitioActivo(horaApertura, horaCierre)) {
            estadoElemento.textContent = "Pizzeria La Cancha";
        } else {
            estadoElemento.textContent = "Gracias por su preferencia, lo esperamos en el horario laboral.";
            if (formulario) {
                formulario.style.display = "none";
            }
        }
    }
});
// Función para guardar la información de la comida y redirigir
function guardarComida() {
    
const pizzaNombre = document.getElementById("pizza").value;
const cantidadDePizzas = parseInt(document.getElementById("cantidadPizza").value);
const pizzaPrecio = parseInt(document.getElementById("pizza").options[document.getElementById("pizza").selectedIndex].dataset.precio);
const totalPizzas = pizzaPrecio * cantidadDePizzas;

    // Calcular el total de las pizzas

    // Guardar complementos y calcular su costo
    const complementos = {
        QuesoExt: document.getElementById("QuesoExt").checked, // Cambiado a QuesoExt
        Refresco: document.getElementById("refresco").checked,
        OrQueso: document.getElementById("OrQueso").checked, // Cambiado a OrQueso
        Papas: document.getElementById("Papas").checked
    };

    // Sumar $20 por cada complemento seleccionado
    const precioComplemento = 20; // Precio de cada complemento
    let costoComplementos = 0;

    if (complementos.QuesoExt) costoComplementos += precioComplemento; // Cambiado a QuesoExt
    if (complementos.Refresco) costoComplementos += precioComplemento;
    if (complementos.OrQueso) costoComplementos += precioComplemento; // Cambiado a OrQueso
    if (complementos.Papas) costoComplementos += precioComplemento;

    // Sumar el costo de los complementos al total
    const total = costoComplementos + totalPizzas;

    // Guardar en localStorage
// Código reemplazado
localStorage.setItem("pizza", pizzaNombre);
localStorage.setItem("cantidad", cantidadDePizzas);
localStorage.setItem("total", total);
localStorage.setItem("complementos", JSON.stringify(complementos));

    const consumoLocal = document.getElementById("consumoLocal").checked;
    const envioDomicilio = document.getElementById("envioDomicilio").checked;

    // Redireccionar según el método de entrega
    if (consumoLocal) {
        window.location.href = "Pago.html"; // Redirige a pagar.html
    } else if (envioDomicilio) {
        window.location.href = "direccion.html"; // Redirige a direccion.html
    } else {
        alert("Por favor, selecciona un método de entrega."); // Mensaje si no se selecciona nada
    }
}

// Recuperar el total del localStorage
const total = localStorage.getItem("total");
document.getElementById("total-pagar").textContent = total;

// Elementos del DOM
const metodoPago = document.getElementById("metodo-pago");
const efectivoDiv = document.getElementById("EfectivoDiv");
const datosTarjetaDiv = document.getElementById("datos-tarjeta");
const efectivoInput = document.getElementById("efectivo");
const mensajeEfectivo = document.getElementById("mensaje-efectivo");
const mensajeTarjeta = document.getElementById("mensaje-tarjeta");

// Mostrar u ocultar campos según el método de pago
metodoPago.addEventListener("change", () => {
    if (metodoPago.value === "Efectivo") {
        efectivoDiv.style.display = "block";
        datosTarjetaDiv.style.display = "none";
        mensajeTarjeta.style.display = "none"; // Ocultar mensaje de tarjeta
    } else if (metodoPago.value === "Tarjeta") {
        efectivoDiv.style.display = "none";
        datosTarjetaDiv.style.display = "block";
        mensajeEfectivo.style.display = "none"; // Ocultar mensaje de efectivo
        mensajeTarjeta.style.display = "block"; // Mostrar mensaje de tarjeta
    } else {
        efectivoDiv.style.display = "none";
        datosTarjetaDiv.style.display = "none";
        mensajeEfectivo.style.display = "none";
        mensajeTarjeta.style.display = "none";
    }
});

// Validar el monto en efectivo
if (efectivoInput) {
    efectivoInput.addEventListener("input", () => {
        const montoEfectivo = parseFloat(efectivoInput.value);
        if (montoEfectivo < total) {
            mensajeEfectivo.style.display = "block"; // Mostrar mensaje de error
        } else {
            mensajeEfectivo.style.display = "none"; // Ocultar mensaje de error
        }
    });
}

// Función para guardar el pago (opcional, si aún la necesitas)
function guardarPago() {
    // Lógica para guardar el pago y redirigir
    window.location.href = "ticket.html";
}

// Función para guardar la dirección y redirigir
function guardarDireccion() {
    const direccion = {
        calle: document.getElementById("calle").value,
        numero: document.getElementById("numero").value,
        colonia: document.getElementById("colonia").value,
        municipio: document.getElementById("municipio").value,
        estado: document.getElementById("Edo").value
    };
    localStorage.setItem("direccion", JSON.stringify(direccion));

    // Redirigir a pago.html
    window.location.href = "Pago.html";
}

// Función para guardar el método de pago y redirigir
function guardarPago() {
    const metodoPago = document.getElementById("metodo-pago").value;
    localStorage.setItem("metodoPago", metodoPago);

    if (metodoPago === "Tarjeta") {
        const datosTarjeta = {
            numero: document.getElementById("numero-tarjeta").value,
            nombre: document.getElementById("nombre-tarjeta").value,
            expiracion: document.getElementById("fecha-expiracion").value,
            cvv: document.getElementById("cvv").value
        };
        localStorage.setItem("datosTarjeta", JSON.stringify(datosTarjeta));
    } else if (metodoPago === "Efectivo") {
        const efectivoInput = document.getElementById("efectivo").value;
        if (efectivoInput) {
            localStorage.setItem("efectivo", efectivoInput);
        } else {
            alert("Por favor, ingresa la cantidad de efectivo.");
            return; // Detener la ejecución si no hay cantidad de efectivo
        }
    }

    // Redirigir a ticket.html
    window.location.href = "ticket.html";
}
