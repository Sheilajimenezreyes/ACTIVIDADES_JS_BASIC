/* 
EJERCICIO 9:
Genera un array de un determinado tamaño con números aleatorios entre dos valores
y calcula el menor y el mayor de estos números.

Ejemplo: 
  exercise09(5, 0, 100) 
  devuelve "The minimum number is 0 and the maximum number is 100 in [0,50,99,49,100]"
*/
export function exercise09(length, start, end) {
  // Escribe tu solución aquí
  let arrResult = arrayMaxYmin(length,start,end)
  return `The minimum number is ${arrResult[0]} and the maximum number is ${arrResult[1]} in ${arrResult[2]}`;
}
function arrayMaxYmin (length,start,end){
let arr = []
  for(let i=0; i<length; i++){
    arr.push(Math.floor(Math.random()*(end-start+1)))+start
  }
  let arr2 = [...arr]
  arr.sort((b,a)=>b-a)
  let min = arr[0]
  let max = arr[arr.length-1]
  const arrayResult = [min, max, arr2]
  return arrayResult
}