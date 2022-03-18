const numeros = [8, 11, 4, 1];
let menor, maior;

for (let i = 0; i < numeros.length; i++) {
  if(i === 0){
    menor = numeros[i];
    maior = numeros[i];
  }else if(numeros[i] > maior){
    maior = numeros[i];
  }else if(numeros[i] < menor){
    menor = numeros[i];
  }
}

console.log(maior - menor);