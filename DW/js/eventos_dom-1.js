// Función 1 - Mostrar posición del mouse
function mostrarPosicion(event) {
    var posicionDiv = document.getElementById("mousePosition");
    var posX = event.clientX;
    var posY = event.clientY;

    posicionDiv.textContent = "Posición del mouse: " + posX + ", " + posY;
  }

  document.addEventListener("mousemove", mostrarPosicion);

// Función 2 - Obtener nombre completo
function obtenerNombreCompleto(event)
  {
    event.preventDefault();
    let firstNameInput = document.getElementById("FirstName");
    let lastNameInput = document.getElementById("LastName");
    let fullName = firstNameInput.value + " " + lastNameInput.value;

    let fullNameElement = document.createElement("p");
    fullNameElement.textContent = "Nombre Completo: " + fullName;

    let form1 = document.getElementById("form1");
    form1.insertAdjacentElement("afterend", fullNameElement);
  }
  let submitButton = document.getElementById("form1-submit");
  submitButton.addEventListener("click", obtenerNombreCompleto);

// Función 3 - Agregar filas y columnas
function insertarFila() {
  let sampleTable = document.getElementById("miTabla");
  let newRow = sampleTable.insertRow();

  let cell1 = newRow.insertCell();
  let cell2 = newRow.insertCell();

  cell1.textContent = "Nueva fila Columna 1";
  cell2.textContent = "Nueva fila Columna 2";
}
// Función 3.1 - Agregar columnas
function insertarColumna() {
  let sampleTable = document.getElementById("miTabla");

  for (let i = 0; i < sampleTable.rows.length; i++) {
    let newRowCell = sampleTable.rows[i].insertCell();
    newRowCell.textContent = "New column";
  }
}
let btnInsertRow = document.getElementById("btn-insert-r");
btnInsertRow.addEventListener("click", insertarFila);

let btnInsertColumn = document.getElementById("btn-insert-c");
btnInsertColumn.addEventListener("click", insertarColumna)

// Función 4 -
function cambiarContenido() {
  let rowIndexInput = document.getElementById("rowIndex");
  let colIndexInput = document.getElementById("colIndex");
  let newValueInput = document.getElementById("newValue");

  let rowIndex = parseInt(rowIndexInput.value) - 1;
  let colIndex = parseInt(colIndexInput.value) - 1;
  let newValue = newValueInput.value;

  let table = document.getElementById("myTable");
  let row = table.rows[rowIndex];

  if (row) {
    let cell = row.cells[colIndex];

    if (cell) {
      cell.textContent = newValue;
    } else {
      alert("La fila específica está fuera de rango.");
    }
  } else {
    alert("La fila especificada está fuera de rango.");
  }
}

let btnChange = document.getElementById("btn-change");
btnChange.addEventListener("click", cambiarContenido);
// Función 5 -
function agregarColor() {
  /*let colorSelect = document.getElementById("colorSelect");
  let newColorInput = prompt("Ingrese un nuevo color:");

  if (newColorInput) {
    let option = document.createElement("option");
    option.textContent = newColorInput;
    colorSelect.appendChild(option);
  }*/
  let coloresSelect = document.getElementById("coloreSelect");

  let nuevoColor = generarColorAleatorio();
  let nuevoColorOption = document.createElement("option");
  nuevoColorOption.value = nuevoColor;
  nuevoColorOption.text = nuevoColor;
  coloresSelect.add(nuevoColorOption);
}

function quitarColor() {
  let colorSelect = document.getElementById("colorSelect");
  let selectedIndex = colorSelect.selectedIndex;

  if (selectedIndex !== -1) {
    colorSelect.remove(selectedIndex);
  }
}

let btnAddColor = document.getElementById("btn-add-color");
btnAddColor.addEventListener("click", agregarColor);

let btnRmvColor = document.getElementById("btn-rmv-color");
btnRmvColor.addEventListener("click", quitarColor);
// Función 6 -
function generarTamanioAleatorio()
{
  let imagenGato = document.getElementById("imagenGato");
  let width = Math.floor(Math.random() * (600 - 300 + 1)) + 300;
  let height = Math.floor(Math.random() * (600 - 300 + 1)) + 300;
  let nuevaURL = "http://placekitten.com/" + width + "/" + height;
  imagenGato.src = nuevaURL;
}

let imagenGato = document.getElementById("imagenGato");
imagenGato.addEventListener("mouseenter", generarTamanioAleatorio);