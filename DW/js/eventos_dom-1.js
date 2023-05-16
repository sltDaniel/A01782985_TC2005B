// Función 1 - Mostrar posición del mouse
// Esta función muestra la posición del ratón cuando ocurre un evento
function mostrarPosicion(event)
{
    var posicionDiv = document.getElementById("mousePosition");// Obtiene una referencia al elemento HTML con el ID "mousePosition"
    var posX = event.clientX; // Obtiene la posición X del ratón dentro de la ventana del navegador
    var posY = event.clientY; // Obtiene la posición Y del ratón dentro de la ventana del navegador

    posicionDiv.textContent = "Posición del mouse: " + posX + ", " + posY; // Actualiza el contenido del elemento posicionDiv con la nueva posición del ratón
  }

  document.addEventListener("mousemove", mostrarPosicion);

// Esta función obtiene el nombre completo a partir de dos campos de entrada de un formulario
// Función 2 - Obtener nombre completo
function obtenerNombreCompleto(event)
  {
    event.preventDefault(); // Previene el comportamiento predeterminado del evento (por ejemplo, evitar el envío del formulario)
    // Obtiene una referencia a los elementos de entrada del nombre y apellido
    let firstNameInput = document.getElementById("FirstName");
    let lastNameInput = document.getElementById("LastName");

    // Obtiene los valores de los campos de entrada del nombre y apellido
    let fullName = firstNameInput.value + " " + lastNameInput.value;

    let fullNameElement = document.createElement("p"); // Crea un nuevo elemento de párrafo <p> para mostrar el nombre completo
    fullNameElement.textContent = "Nombre Completo: " + fullName; // Asigna el contenido del nuevo elemento con la cadena que muestra el nombre completo

    // Obtiene una referencia al formulario con el ID "form1"
    let form1 = document.getElementById("form1");
    form1.insertAdjacentElement("afterend", fullNameElement); // Inserta el nuevo elemento de nombre completo después del formulario
  }
  let submitButton = document.getElementById("form1-submit");
  submitButton.addEventListener("click", obtenerNombreCompleto);

// Función 3 - Agregar filas y columnas
// Esta función inserta una nueva fila en una tabla HTML
function insertarFila()
{
  let sampleTable = document.getElementById("miTabla"); // Obtiene una referencia a la tabla con el ID "miTabla"
  let newRow = sampleTable.insertRow(); // Inserta una nueva fila al final de la tabla

  // Inserta dos nuevas celdas en la nueva fila
  let cell1 = newRow.insertCell();
  let cell2 = newRow.insertCell();

  // Asigna el contenido de las celdas con textos predefinidos
  cell1.textContent = "Nueva fila Columna 1";
  cell2.textContent = "Nueva fila Columna 2";
}
// Función 3.1 - Agregar columnas
// Esta función inserta una nueva columna en una tabla HTML
function insertarColumna()
{
  let sampleTable = document.getElementById("miTabla"); // Obtiene una referencia a la tabla con el ID "miTabla"

  // Itera sobre las filas existentes en la tabla
  for (let i = 0; i < sampleTable.rows.length; i++)
  {
    // Inserta una nueva celda en cada fila
    let newRowCell = sampleTable.rows[i].insertCell();
    newRowCell.textContent = "New column";// Asigna el contenido de la nueva celda con el texto "New column"
  }
}
let btnInsertRow = document.getElementById("btn-insert-r");
btnInsertRow.addEventListener("click", insertarFila);

let btnInsertColumn = document.getElementById("btn-insert-c");
btnInsertColumn.addEventListener("click", insertarColumna)

// Función 4 -
// Esta función cambia el contenido de una celda específica en una tabla HTML
function cambiarContenido()
{
  // Obtiene referencias a los elementos de entrada del índice de fila, índice de columna y nuevo valor
  let rowIndexInput = document.getElementById("rowIndex");
  let colIndexInput = document.getElementById("colIndex");
  let newValueInput = document.getElementById("newValue");

  // Obtiene los valores de los campos de entrada y los convierte a enteros
  let rowIndex = parseInt(rowIndexInput.value) - 1;
  let colIndex = parseInt(colIndexInput.value) - 1;
  let newValue = newValueInput.value;

  let table = document.getElementById("myTable"); // Obtiene una referencia a la tabla con el ID "myTable"
  let row = table.rows[rowIndex]; // Obtiene una referencia a la fila específica en base al índice de fila

  // Verifica si la fila existe
  if (row)
  {
    // Obtiene una referencia a la celda específica en base al índice de columna
    let cell = row.cells[colIndex];

    // Verifica si la celda existe
    if (cell)
    {
      cell.textContent = newValue; // Cambia el contenido de la celda con el nuevo valor
    }
    else
    {
      // Muestra una alerta si el índice de columna está fuera de rango
      alert("La fila específica está fuera de rango.");
    }
  }
  else
  {
    // Muestra una alerta si el índice de fila está fuera de rango
    alert("La fila especificada está fuera de rango.");
  }
}

let btnChange = document.getElementById("btn-change");
btnChange.addEventListener("click", cambiarContenido);

// Función 5 -
// Esta función agrega un nuevo color
function agregarColor()
{
  // Obtiene una referencia al elemento <select> con el ID "coloreSelect"
  let coloresSelect = document.getElementById("coloreSelect");

  // Genera un nuevo color aleatorio
  let nuevoColor = generarColorAleatorio();
  // Crea un nuevo elemento <option> para el nuevo color
  let nuevoColorOption = document.createElement("option");
  // Asigna el valor y el texto del nuevo color al elemento <option>
  nuevoColorOption.value = nuevoColor;
  nuevoColorOption.text = nuevoColor;
  // Agrega el nuevo elemento <option> al elemento <select>
  coloresSelect.add(nuevoColorOption);
}

// Esta función elimina el color
function quitarColor()
{
  // Obtiene una referencia al elemento <select> con el ID "colorSelect"
  let colorSelect = document.getElementById("colorSelect");
  // Obtiene el índice del elemento seleccionado en el elemento <select>
  let selectedIndex = colorSelect.selectedIndex;

  // Verifica si se ha seleccionado un elemento en el <select>
  if (selectedIndex !== -1)
  {
    // Elimina el elemento seleccionado del elemento <select>
    colorSelect.remove(selectedIndex);
  }
}

let btnAddColor = document.getElementById("btn-add-color");
btnAddColor.addEventListener("click", agregarColor);

let btnRmvColor = document.getElementById("btn-rmv-color");
btnRmvColor.addEventListener("click", quitarColor);

// Función 6 -
// Esta función genera y muestra una imagen de un gato con un tamaño aleatorio
function generarTamanioAleatorio()
{
  let imagenGato = document.getElementById("imagenGato"); // Obtiene una referencia al elemento de imagen con el ID "imagenGato"
  let width = Math.floor(Math.random() * (600 - 300 + 1)) + 300; // Genera un ancho aleatorio en el rango de 300 a 600
  let height = Math.floor(Math.random() * (600 - 300 + 1)) + 300; // Genera una altura aleatoria en el rango de 300 a 600
  let nuevaURL = "http://placekitten.com/" + width + "/" + height; // Crea la URL de la imagen utilizando el ancho y la altura generados
  imagenGato.src = nuevaURL;// Asigna la nueva URL a la propiedad src de la imagen para mostrarla
}

let imagenGato = document.getElementById("imagenGato");
imagenGato.addEventListener("mouseenter", generarTamanioAleatorio);