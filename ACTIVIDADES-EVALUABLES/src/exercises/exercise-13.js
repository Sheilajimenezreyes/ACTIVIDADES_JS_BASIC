/* 
EJERCICIO 13:
Escribe una función que, pasándole como parámetro el array de películas 'movies'
exportado en el archivo "data.js", devuelva un array con el título y la descripción 
de las mejores peliculas ordenadas de mejor a peor, siendo las mejores aquellas cuya 
valoración es superior a la valoración media de todas las películas
*/
export function exercise13(movies) {
  // Escribe tu solución aquí
  let concatena=""
  let valoracion = valoracionMedia(movies)
  let result = mejorValoradas(movies, valoracion)
   for(let i=0; i<result.length; i++){
    const {title,description}=result[i]
    concatena+= "<br>"+(i+1)+" titulo: "+title+"<br>"+" descripción: "+description
   }
  return "Los titulos y descripciones ordenados por valoracion de mejor a peor son: " + concatena
  
}
function valoracionMedia(movies){
  let valoracionTotal = 0
  for(let i=0; i<movies.length; i++){
    valoracionTotal+=movies[i].rating 
  }
  let valoracionMedia = valoracionTotal/movies.length
  return valoracionMedia
}
function mejorValoradas(movies, valoracionMedia){
  let arrayMoviesAlta = []
  for(let i=0; i<movies.length; i++){
    if (movies[i].rating>valoracionMedia){
        arrayMoviesAlta.push({
        title: movies[i].title+" (LA MEJOR VALORADA)",
        description: movies[i].description,
        rating: movies[i].rating
      })
    }else{
          arrayMoviesAlta.push({
        title: movies[i].title,
        description: movies[i].description,
        rating: movies[i].rating
      })
    }
    
  }
  arrayMoviesAlta.sort((b,a)=>a.rating-b.rating)
 
  return arrayMoviesAlta
}
