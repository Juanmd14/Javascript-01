// Escribe un programa que pida un número y diga si es divisible por 2

let num = parseInt(prompt("Ingresa un número:"));

if (num % 2 === 0) {
    document.write(`${num} es divisible por 2`);
} else {
    document.write(`${num} no es divisible por 2`);
}