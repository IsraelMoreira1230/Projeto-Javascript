let number = parseInt(prompt("Insira um número entre 1 e 21: "));
if (number < 1 || number > 21) {
    console.log("Número fora do intervalo permitido.");
    return;
}
let result = 1;
for (let i = 1; i <= number; i++) {
    result *= i;
}
console.log("O fatorial de " + number + " é " + result);
