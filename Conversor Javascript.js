/* DESAFIO 1: Conversão de temperatura
- crie um código para a conversão de temperaturas
-Fórmulas:
 =>Celsius para Fahrenheit: (temperaturaCelsius * 9/5) + 32
 => Fahrenheit para Celsius: ((temperaturaFahrenheit - 32) *5)/9
 */


// Função para converter Celsius para Fahrenheit
function celsiusParaFahrenheit(temperaturaCelsius) {
    return (temperaturaCelsius * 9/5) + 32;
}

// Função para converter Fahrenheit para Celsius
function fahrenheitParaCelsius(temperaturaFahrenheit) {
    return (temperaturaFahrenheit - 32) * 5/9;
}

let temperaturaEmCelsius = 30;
let temperaturaEmFahrenheit = celsiusParaFahrenheit(temperaturaEmCelsius);
console.log(`${temperaturaEmCelsius} graus Celsius é igual a ${temperaturaEmFahrenheit.toFixed(2)} graus Fahrenheit`);

temperaturaEmFahrenheit = 86;
temperaturaEmCelsius = fahrenheitParaCelsius(temperaturaEmFahrenheit);
console.log(`${temperaturaEmFahrenheit} graus Fahrenheit é igual a ${temperaturaEmCelsius.toFixed(2)} graus Celsius`);

/*Neste código, as funções celsiusParaFahrenheit e fahrenheitParaCelsius realizam as conversões conforme as fórmulas fornecidas. 
O método toFixed(2) é usado para arredondar o resultado para duas casas decimais no exemplo de uso.*/
