let num1 = parseFloat(prompt("Insira a nota do primeiro bimestre: "));
let num2 = parseFloat(prompt("Insira a nota do segundo bimestre: "));
let num3 = parseFloat(prompt("Insira a nota do terceiro bimestre: "));
let average = (num1 + num2 + num3) / 3;

if (average <= 1) {
    console.log("Aluno reprovado");
} else if (average > 1 && average <= 4) {
    console.log("Aluno em recuperação");
} else if (average > 4 && average <= 7) {
    console.log("Aluno aprovado");
} else if (average > 7) {
    console.log("Aluno aprovado com ótimo aproveitamento");
}
