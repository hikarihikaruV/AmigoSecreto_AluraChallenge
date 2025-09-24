// Array para guardar los nombres
let amigos = [];

// Función para agregar un amigo a la lista
function agregarAmigo() {
  let input = document.getElementById("amigo");
  let nombre = input.value.trim();

  // Validar que no esté vacío
  if (nombre === "") {
    alert("Por favor, inserte un nombre.");
    return;
  }

  // Validar que no esté repetido
  if (amigos.includes(nombre)) {
    alert(`El nombre "${nombre}" ya está en la lista.`);
    input.value = "";
    return;
  }

  amigos.push(nombre); 
  input.value = ""; 
  mostrarLista(); 
}

// Función para mostrar la lista de amigos en el <ul>
function mostrarLista() {
  let lista = document.getElementById("listaAmigos");
  lista.innerHTML = ""; 

  for (let i = 0; i < amigos.length; i++) {
    let li = document.createElement("li");
    li.textContent = amigos[i];
    lista.appendChild(li);
  }
}

// Función para sortear un amigo secreto
function sortearAmigo() {
  if (amigos.length === 0) {
    alert("No hay amigos en la lista para sortear.");
    return;
  }

  let indiceAleatorio = Math.floor(Math.random() * amigos.length);
  let amigoSorteado = amigos[indiceAleatorio];

  let resultado = document.getElementById("resultado");
  resultado.innerHTML = "El amigo secreto es: <b>" + amigoSorteado + "</b>";
}
