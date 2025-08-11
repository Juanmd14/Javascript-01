// Escribe un programa que pida 3 números y escriba en la pantalla el mayor de los tres.

let num1 = parseFloat(prompt("Ingresa el primer numero:"));
let num2 = parseFloat(prompt("Ingresa el segundo numero:"));
let num3 = parseFloat(prompt("Ingresa el tercer numero:"));

let numeroMayor = Math.max(num1, num2, num3);

alert("El numero mayor es: " + numeroMayor);