const numeros = [3, 24, 1, 8, 11, 7, 15];
let maior;

for (let i = 0; i < numeros.length; i++){
  if(i === 0){
    maior = numeros[i];
  }else if(numeros[i] > maior){
    maior = numeros[i];
  }
}

console.log(maior);
