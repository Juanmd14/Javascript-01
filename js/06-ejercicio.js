//Escribe un programa que pida dos números y escriba en la pantalla cual es el mayor

let num1 = parseFloat(prompt("Ingresa el primer numero:"));
let num2 = parseFloat(prompt("Ingresa el segundo numero:"));

if (num1 > num2) {
  document.write("El mayor es: " + num1);
} else if (num2 > num1) {
  document.write("El mayor es: " + num2);
} else {
  document.write("Los dos numeros son iguales");
}