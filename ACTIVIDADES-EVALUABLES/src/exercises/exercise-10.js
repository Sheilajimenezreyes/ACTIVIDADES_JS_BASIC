/* 
EJERCICIO 10:
Escribe una o varias funciones para que, dado un string, devuelva un array que contenga la posición 
que ocupa cada carácter en el abecedario. Para que sea más sencillo, elimina los espacios y tildes 
(recuerda que puedes utilizar funciones auxiliares de ejercicios anteriores si las declaraste en el archivo utils.js).
*/
export function exercise10(string) {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  let arrayPosicion = []
  let fraseMinuscula = string.toLowerCase()
  fraseMinuscula = fraseMinuscula.replace(" ", "")
  for(let i=0; i<fraseMinuscula.length; i++){
    let cajaLetras = fraseMinuscula.charAt(i)
    let posicion = alphabet.indexOf(cajaLetras)
    arrayPosicion.push(posicion)
  }
  return "el array de posiciones es: "+ arrayPosicion 
  // Escribe tu solución aquí
}
