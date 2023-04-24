/*
Actividad en clase: Javascript
*/

//Ejercicio 1 - Encontrar primer caracter en una cadena de texto que no se repite
const pruebas ="abacddbec";

const primeraLetraQueNoSeRepite = cadena =>
{
	// A minúscula porque todas deben estar en la misma notación
	let cadenaEnMinuscula = cadena.toLowerCase();
	// Recorrer cadena letra por letra
	for (let x = 0; x < cadena.length; x++)
    {
		// Obtener carácter actual, y convertirlo a minúscula
		let caracterActual = cadena.charAt(x).toLowerCase();
		// Ver si primera aparición y última aparición son iguales
		if (cadenaEnMinuscula.indexOf(caracterActual) === cadenaEnMinuscula.lastIndexOf(caracterActual))
        {
			// En caso de que sí, regresamos el carácter de la cadena original en la posición que vamos
			return cadena.charAt(x);
		}
	}
	// Terminamos de recorrer la cadena pero no encontramos ninguna letra que no se repitiera, así que regresamos cadena vacía
	return "";
}

pruebas.forEach(prueba => {
	console.log(`Primera letra que no se repite en '${prueba}': '${primeraLetraQueNoSeRepite(prueba)}'`);
});

//Ejercicio 2 - Función que implemente el algoritmo 'bubble-sort' para ordenar una lista de números.