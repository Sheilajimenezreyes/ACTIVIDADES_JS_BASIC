/* 
EJERCICIO 6:
Escribir una función que calcule si una cadena de texto es un palíndromo y
devuelva un mensaje con la cadena de texto y el resultado.

Ejemplos:
"The phrase 'Rats live on no evil star' is palindrome"
"The phrase 'Hello world' is NOT palindrome"

Nota: los signos de puntuación, mayúsculas y espacios deben ser ignorados (no incluyas los acentos). 
*/

export function exercise06(string) {
  // Escribe tu solución aquí
 return isPalindrome(string)
  // return [condición]
  //   ? `The phrase '${string}' is a palindrome`
  //   : `The phrase '${string}' is NOT a palindrome`;
}

function isPalindrome(string){
 let palabraAlreves="" 
 let result=""
 let copy=string
for(let i=string.length-1; i>=0; i--){
  palabraAlreves+= string.charAt(i)
}
if(copy.toLowerCase()===palabraAlreves.toLowerCase()){
  result="The phrase " + string + " is palindrome"
}else{
  result="the phrase " + string + " is not palindrome"
}
return result
}
