// Escribe un programa que pida una frase y escriba las vocales que aparecen
// Nota: Tener en cuenta la función length y substring o charAt (developer mozilla)


let frase = prompt('Ingresa la frase');
let vocal = "";

for (let i = 0; i < frase.length; i++) {
    let letra = frase.charAt(i).toLowerCase();
    if (letra === "a" || letra === "e" || letra === "i" || letra === "o" || letra === "u") {
        vocal += letra;
    }
}

console.log(vocal);