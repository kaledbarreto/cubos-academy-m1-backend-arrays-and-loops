//const letras = ["A", "a", "B", "C", "L", "z"];
const letras = ["A", "a", "B", "C", "E", "e"];
let cont = 0;

for(let i = 0; i < letras.length; i++) {
  if(letras[i] === "E" || letras[i] === "e"){
    cont++;
  }
}

if(cont === 0) {
  console.log(`Nenhuma letra "E" ou "e" foi encontrada.`);
}else {
  console.log(`Foram encontradas ${cont} letras "E" ou "e".`);
}
