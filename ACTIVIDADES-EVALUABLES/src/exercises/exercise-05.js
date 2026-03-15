/* 
EJERCICIO 5:
Escribe una función que recibe de entrada una cadena de texto y 
devuelve otra cadena con cada letra repetida tantas veces como la posición que ocupa 
empezando la primera repetición en mayúscula y el resto en minúscula

Ejemplos:
  exercise05('code') // result: "COoDddEeee"
  exercise05('list') // result: "LIiSssTttt"
  exercise05('function') // result: "FUuNnnCcccTttttIiiiiiOooooooNnnnnnnn"
*/
export function exercise05(string) {
  // Escribe tu solución aquí
  return letrasRepetidas(string)
}

function letrasRepetidas(frase){
let cadena=frase.charAt(0).toUpperCase();
  for(let i=1; i<frase.length; i++){
      cadena+=frase.charAt(i).toUpperCase()
      for(let k=0; k<i; k++){
        cadena+=frase.charAt(i)
      }
    }

return cadena
  /* return frase.split("").map((element,index) => {
    let rep=(element.repeat(index+1))
    return rep.charAt(0).toUpperCase() + rep.substring(1);
   })
   .join("");*/
  
     
  }

