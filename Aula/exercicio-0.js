const paises = ["Brasil", "Japão", "Rússia", "Estados Unidos", "Argentina"];

paises.push("Chile");
console.log(paises);

paises.pop();
console.log(paises);

paises.unshift("Grécia");
console.log(paises);

paises.shift();
console.log(paises);

console.log(paises[paises.length - 1]);
console.log(paises[1]);
console.log(paises[2]);