const nomes = ["Ana", "Joana", "Carlos", "amanda"];
let novonomes = [];

let nome, verifica;

for (nome of nomes) {
  for (verifica of nome){
    if(verifica === "A" || verifica === "a"){
      novonomes.push(nome);
      break;
    }else{
      break;
    }
  }
}

console.log(novonomes);