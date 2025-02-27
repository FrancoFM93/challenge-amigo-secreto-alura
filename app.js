let nombres = []; // Array para almacenar los nombres

const inputAmigo = document.getElementById("amigo"); // Campo para ingresar nombres
const listaAmigos = document.getElementById("listaAmigos"); // Lista de nombres
const resultado = document.getElementById("resultado"); // Resultado del sorteo

// Función para agregar un nombre a la lista
function agregarAmigo() {
    const nombre = inputAmigo.value.trim(); // Obtener el valor del campo de texto y eliminar espacios en blanco

    // Validar que el campo no esté vacío
    if (!nombre) { // Si el nombre está vacío (null, undefined, o cadena vacía)
        alert("Por favor, ingresa un nombre válido.");
        return;
    }

    // Validar que el nombre no esté repetido
    if (nombres.includes(nombre)) {
        alert("Este nombre ya está en la lista.");
        return;
    }

    // Agregar el nombre al array
    nombres.push(nombre);

    // Mostrar los nombres en la consola
    console.log("Nombres actuales:", nombres);

    // Actualizar la lista de nombres en la página
    actualizarLista();

    // Limpiar el campo de entrada
    inputAmigo.value = "";
}

// Función para actualizar la lista de nombres en la página
function actualizarLista() {
    listaAmigos.innerHTML = ""; // Limpiar la lista

    // Recorrer el array de nombres y crear elementos <li> para cada uno
    nombres.forEach((nombre) => {
        const li = document.createElement("li");
        li.textContent = nombre;
        listaAmigos.appendChild(li);
    });
}

// Función para sortear un amigo secreto
function sortearAmigo() {
    
    // Mostrar los nombres en la consola (para verificar)
    console.log("Nombres en el sorteo:", nombres); 

    // Validar que haya nombres en la lista
    if (nombres.length === 0) {
        alert("No hay nombres en la lista. Agrega algunos nombres primero.");
        return;
    }

    // Seleccionar un nombre aleatorio
    const indiceAleatorio = Math.floor(Math.random() * nombres.length);
    const amigoSecreto = nombres[indiceAleatorio];

    // Mostrar el resultado
    resultado.innerHTML = `<li>¡El amigo secreto es: <strong>${amigoSecreto}</strong>!</li>`;

    // Resetear la lista después del sorteo
    nombres = []; // Vacía el array de nombres
    actualizarLista(); // Refresca la lista en la interfaz

    // Limpiar el campo de entrada (por si acaso)
    inputAmigo.value = "";
}

// Event listener para el botón "Añadir"
document.querySelector(".button-add").addEventListener("click", agregarAmigo);

// Event listener para el campo de texto: agregar nombre al presionar "Enter"
inputAmigo.addEventListener("keyup", (event) => {
    if (event.key === "Enter") { // Verificar si la tecla presionada es "Enter"
        event.preventDefault(); // Evitar que se envíe el formulario para evitar la ventana emergente
        agregarAmigo(); // Llamar a la función para agregar el nombre
    }
});

// Event listener para el botón "Sortear amigo"
btnSortear.addEventListener("click", () => {
    if (nombres.length === 0) {
        alert("No hay nombres en la lista. Agrega algunos nombres primero.");
        return;
    }

    sortearAmigo();
});

