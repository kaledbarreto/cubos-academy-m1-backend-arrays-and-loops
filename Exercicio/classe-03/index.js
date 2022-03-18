const numeros = [54, 22, 14, 10, 284];
//const numeros = [54, 22, 14, 87, 284];
let encontrei = false;

for (let i = 0; i < numeros.length; i++) {
  if(numeros[i] === 10){
    console.log(i);
    encontrei = true;
    break;
  }
}

if(!encontrei) {
  console.log("-1");
}


