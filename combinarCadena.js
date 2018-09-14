/*
Giovanny Mora

Métodos usados de JavaScript:
- indexOf() https://www.w3schools.com/jsref/jsref_indexof.asp
  El método indexOf () devuelve la posición de la primera aparición de un valor especificado en una cadena.

- join () https://www.w3schools.com/jsref/jsref_join.asp
  El método join () se une a los elementos de una matriz en una cadena, y devuelve la cadena.
  Los elementos serán separados por un separador especificado. El separador predeterminado es una coma (,). 

- push () https://www.w3schools.com/jsref/jsref_push.asp
  El método push () añade nuevos elementos al final de una matriz, y devuelve la nueva longitud.


- slice () https://www.w3schools.com/jsref/jsref_slice_array.asp
  El método slice () devuelve los elementos seleccionados en una matriz, como un nuevo objeto de matriz.

- sort() https://www.w3schools.com/js/js_array_sort.asp
  El sort () método ordena una matriz alfabéticamente
*/


debugger
var combinarCadena = {
	// Realizar las combinaciones de caracteres de una palabra
	combinar: (palabra) => {
		// Si la palabra tiene solamente dos caracteres
		if ( palabra.length < 2 ) {
			debugger
			// no se podrán realizar más combinaciones
			return palabra;
		}

		// Crear un arreglo de las posibles combinaciones
		var posiblesCombinaciones = [];

		for ( var i = 0; i < palabra.length; i++ ) {
			debugger
			var letra = palabra[i];

			// si la palabra que se evalúa ya tiene la letra
			if ( palabra.indexOf(letra) != i ) {
				// termina la iteración
				continue;
			}
			console.log(letra);

			// Realizar la combinación de las letras
			var palabraRestante = palabra.slice(0, i) + palabra.slice(i + 1, palabra.length);

			// Realizar una iteración recursiva para separar la combinación
			for ( var subpalabra of  combinarCadena.combinar( palabraRestante )) {
				//  Agregar el resultado de la subpalabra al arreglo de las posiblesCombinaciones
				posiblesCombinaciones.push( letra + subpalabra)
			}
		}
		// Devolver el resultado de la combinación y ordenarlo usando el sort()
		return posiblesCombinaciones.sort();
		console.log(posiblesCombinaciones);
	},
	// Método inicial 
	iniciar: (arreglo) => {
		debugger
		let resultadoCombinaciones = [];
		// Recorrer las palabras en el arreglo
		arreglo.forEach( palabra => {
			// Se Obtienen las combinaciones de caracteres de las palabras
			let combinaciones = combinarCadena.combinar(palabra);

			//  Agregar las combinaciones al resultado
			resultadoCombinaciones.push(combinaciones);
			console.log(resultadoCombinaciones);
		});

		// Recorrer los resultados
		resultadoCombinaciones.forEach(fila => {

			// Imprimir los resultados y unirlos usando el join()
			console.log(fila.join(', '));
		})
	}
}

var arreglo = ['hat', 'abc', 'Zu6'];
combinarCadena.iniciar(arreglo);