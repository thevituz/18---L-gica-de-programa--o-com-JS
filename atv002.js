// Atividade 2: Calcular média aritmética de dois números inteiros

// Solicita os dois números ao usuário
let numero1 = parseInt(prompt("Digite o primeiro número inteiro:"));
let numero2 = parseInt(prompt("Digite o segundo número inteiro:"));

// Verifica se os números são válidos
if (isNaN(numero1) || isNaN(numero2)) {
    alert("Você deve digitar dois números válidos.");
} else {
    let media = (numero1 + numero2) / 2;
    alert("A média aritmética é: " + media);
}
