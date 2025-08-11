// Escribe un programa que pida un número y nos diga si es divisible por 2, 3, 5 o 7 (sólo hay que comprobar si lo es por uno de los cuatro)

let numero =  Number(prompt('numero'))

switch (true) {
  case (numero % 2 == 0):
   console.log('es divisible por 2');
    break;
  case (numero % 3 == 0) :
       console.log('es divisible por 3')
    break;
   case (numero % 5 == 0):
       console.log('es divisible por 5')
    break;
     case (numero % 7 == 0):
       console.log('es divisible por 7')
    break;
  default:
    console.log('no es divisible por nothing')
}