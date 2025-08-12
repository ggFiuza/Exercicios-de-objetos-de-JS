let oper, n1, n2, soma, subtr, multi, divi

oper = prompt("Qual Operação você quer realizar? \n 1.Soma \n 2.Subtração\n 3.Multiplicação\n 4.Divisão")

n1 = prompt("Digite o primeiro número")

n1 = Number(n1)

n2 = prompt("Digite o segundo número")

n2 = Number(n2)

if (oper == 1){
    soma = n1 + n2
    console.log("A soma dos dois números é: "+soma)
}

if (oper == 2){
    subtr = n1 - n2
    console.log("A subtração dos dois números é: "+subtr)
}

if (oper == 3){
    multi = n1 * n2
    console.log("A multiplicação dos dois números é: "+multi)
}



if (oper == 4 && n2 != 0){
    divi = n1 / n2
    console.log("A divisão dos dois números é: "+divi)}
    
else if (n2 == 0){
        console.log("A divisão por 0 não é possível")
    }
