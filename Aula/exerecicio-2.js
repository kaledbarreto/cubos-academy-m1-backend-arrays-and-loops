const palavra = "Alemanha";
let i = 0;

for (letra of palavra){
  if(letra === "a"){
    i++;
  }
}

if (i === 1){
  console.log(`A palavra "${palavra}" tem 1 letra "a"`);
}else if(i > 1){
  console.log(`A palavra "${palavra}" tem ${i} letras "a"`);
}else {
  console.log(`A palavra "${palavra}" não tem nenhuma letra "a"`);
}
