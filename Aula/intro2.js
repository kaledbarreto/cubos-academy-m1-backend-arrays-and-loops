const palavra = "Alemanha";

let encontrado = false;
for (let letra of palavra) {
  if (letra === "h"){
    encontrado = true;
    console.log("Tem a Letra H");
    break;
  }
}

if (!encontrado) {
  console.log("Não tem a letra H");
}