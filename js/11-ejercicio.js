// Añadir al ejercicio anterior que nos diga por cuál de los cuatro es divisible (hay que decir todos por los que es divisible)

let numero = +prompt('Escribe un número');
let divisible = `El ${numero} es divisible por: `;
let original = divisible;  // declaro esta variable para saber si se modifica divisible y comparar al final en caso de que no sea divisible

if (numero % 2 === 0) {
    divisible += "2 ";
}
if (numero % 3 === 0) {
    divisible += "3 ";
}
if (numero % 5 === 0) {
    divisible += "5 ";
}
if (numero % 7 === 0) {
    divisible += "7 ";
}

if (divisible === original) {
    divisible = `El ${numero} no es divisible por 2, 3, 5 ni es divisible por 7`;
}

document.write(divisible);