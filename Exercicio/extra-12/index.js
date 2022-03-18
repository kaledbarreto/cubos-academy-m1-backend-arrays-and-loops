const filaDeDentro = ["Jose", "Maria", "Joao"];
const filaDeFora = ["Joana", "Roberta", "Marcos", "Felipe"];


while(filaDeDentro.length < 5){
  filaDeFora.shift(filaDeDentro[0]);
  filaDeDentro.push(filaDeDentro[0]);
}

console.log(filaDeDentro);
console.log(filaDeFora);
