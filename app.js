// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
// Arreglo para almacenar los nombres ingresados
let listaAmigos = [];

// Función para agregar un nombre a la lista
function agregarAmigo() {
    let input = document.getElementById("amigo");
    let nombre = input.value.trim(); 

    if (nombre === "") {
        alert("Por favor, ingrese un nombre válido.");
        return;
    }

    if (listaAmigos.includes(nombre)) {
        alert("Este nombre ya ha sido agregado.");
        return;
    }

    // Agregar el nombre a la lista
    listaAmigos.push(nombre);
    input.value = ""; // Limpiar el campo de entrada

    actualizarLista();
}

// Función para actualizar la lista en la interfaz
function actualizarLista() {
    let ul = document.getElementById("listaAmigos");
    ul.innerHTML = ""; // Limpiar la lista antes de actualizar

    listaAmigos.forEach((nombre) => {
        let li = document.createElement("li");
        li.textContent = nombre;
        ul.appendChild(li);
    });
}

// Función para sortear un amigo secreto
function sortearAmigo() {
    if (listaAmigos.length < 2) {
        alert("Debe haber al menos dos nombres para realizar el sorteo.");
        return;
    }

    let indiceAleatorio = Math.floor(Math.random() * listaAmigos.length);
    let nombreSorteado = listaAmigos[indiceAleatorio];

    // Mostrar el resultado en pantalla
    document.getElementById("resultado").textContent = `🎉 El amigo secreto es: ${nombreSorteado}! 🎊`;
}
