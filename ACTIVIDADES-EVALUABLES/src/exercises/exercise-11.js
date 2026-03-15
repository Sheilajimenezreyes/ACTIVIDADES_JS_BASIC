/* 
EJERCICIO 11:
Escribe una función que, pasándole como parámetro el array de películas 'movies'
exportado en el archivo "data.js", devuelva un array con las peliculas ordenadas 
por valoracion (propiedad "rating") de mayor a menor  
*/
export function exercise11(movies) {
  // Escribe tu solución aquí
let moviesOrdenadas = listaPeliculas(movies)
return moviesOrdenadas
}

function listaPeliculas(movies){
let arr = movies.sort((a,b)=>b.rating-a.rating)
return arr
}