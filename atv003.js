// Atividade 3: Conversão de Dólar para Real

// Solicita a cotação do dólar e o valor em dólares
let cotacao = parseFloat(prompt("Digite a cotação do dólar:"));
let valorDolares = parseFloat(prompt("Digite o valor em dólares:"));

// Verifica se os valores são válidos
if (isNaN(cotacao) || isNaN(valorDolares)) {
    document.write("Por favor, insira valores válidos.");
} else {
    let valorReais = cotacao * valorDolares;
    document.write(`O valor em reais é: R$ ${valorReais.toFixed(2)}`);
}
