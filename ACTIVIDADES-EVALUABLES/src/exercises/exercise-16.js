/* 
EJERCICIO 16:
Escribe una función que devuelva un array que solo incluya el titulo de la pelicula mejor valorada de cada uno de estos actores: 
- Leonardo Dicaprio
- Robert De Niro
- Tom Hanks

Nota: asegurate que no hay titulos duplicados
*/
export function exercise16(movies) {
  const actors = ["Leonardo DiCaprio", "Robert De Niro", "Tom Hanks"];

  // Escribe tu solución aquí
  let arr= filtroPeliculaPorActor(movies,actors)
  console.log(arr)
  return arr
}

function filtroPeliculaPorActor(movies, actors) {
  let arrayTitulo = [];
  movies.forEach((pelicula) => {
    actors.forEach((actor) => {
      if (pelicula.actors.includes(actor)) {
        arrayTitulo.push(pelicula.title);
      }
    });
  });
  let sinRepetir = [...new Set(arrayTitulo)]
  return sinRepetir
}

