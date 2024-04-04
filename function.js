

let number1 = Number(prompt("Digite o primeiro numero"))
let number2 = Number(prompt("Digite o segundo numero"))

let sum
let minus
let divided
let times


sum = number1 + number2

minus = number1 - number2

divided = number1 / number2


times = number1 * number1


alert("A soma dos numeros eh "+ sum)
alert("A subtracao dos numeros eh "+ minus)
alert("A multiplicacao dos numeros eh "+ times)
alert("A divisao dos numeros eh "+ divided)

if(sum % 2 == 0){
    alert("a soma eh par")
}
else
    alert("a soma eh impar")


if(number1 == number2){
    alert("os numeros inseridos sao iguais")


}

else
    alert("numeros diferentes")