/* 
EJERCICIO 14:
Escribe una función que pasándole "movies" y "categories" del archivo data.js
como parámetros filtra las películas que pertenezcan a la categoria "Drama" 
e incluye solo el título y la descripción.
*/
export function exercise14(movies, categories) {
  // Escribe tu solución aquí
  let peliculasDrama = categoriaPeliculas(movies, categories)
  let concatena= ""
  for(let i=0; i<peliculasDrama.length; i++){
    concatena+="Titulo: "+ peliculasDrama[i].title+"<br>"+ "Descripción: " +peliculasDrama[i].description
  }
  return "La pelicula de Categoría drama es: <br>" + concatena
}
function categoriaPeliculas(movies, categories){
  let peliculasDrama=[]
  for(let i=0; i<movies.length; i++){
    const {title, description}=movies[i]
    if(movies[i].category===categories.drama){
      peliculasDrama.push({
        title: title,
        description: description
      })
    }
  }
  return peliculasDrama
}