let month = prompt("Insira o nome do mês: ").toLowerCase();
let days;

switch (month) {
    case "janeiro":
        days = 31;
        break;
    case "fevereiro":
        days = 28;
        break;
    case "março":
        days = 31;
        break;
    case "abril":
        days = 30;
        break;
    case "maio":
        days = 31;
        break;
    case "junho":
        days = 30;
        break;
    case "julho":
        days = 31;
        break;
    case "agosto":
        days = 31;
        break;
    case "setembro":
        days = 30;
        break;
    case "outubro":
        days = 31;
        break;
    case "novembro":
        days = 30;
        break;
    case "dezembro":
        days = 31;
        break;
    default:
        console.log("Mês inválido");
        return;
}
console.log("O mês de " + month + " tem " + days + " dias.");
