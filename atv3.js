function maiorDeTres(a, b, c) {
  let valores = [a, b, c]
  let maiorValor = valores[0];

  for (let i = 1; i < valores.length; i++) {
    if (valores[i] > maiorValor) {
      maiorValor = valores[i];
    }
  }

  
return maiorValor
}

console.log(maiorDeTres(5, 9, 2));
console.log(maiorDeTres(-3, -7, -1))