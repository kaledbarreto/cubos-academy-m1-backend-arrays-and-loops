const nomes = ["Ana", "Jorge", "João"];
let encontrei = false;

for (let i = 0; i < nomes.length; i++) {
  if(nomes[i] === "João"){
    console.log(`João está no índice ${i}!`);
    encontrei = true;
    break;
  }
}

if(!encontrei){
  console.log("Não encontrado!");
}