let primeirofilme ={

    nome: " ",
    genero: " ",
    nota: " "
}

let segundofilme ={

    segundonome:" ",
    segundogenero: " ",
    segundanota: " "
}

let nome = prompt("Qual o nome do primeiro filme?: ")
nome = String(nome)
primeirofilme.nome = nome

let genero = prompt("Qual o gênero do primeiro filme?: ")
genero = String(genero)
primeirofilme.genero = genero

let nota = prompt("Qual sua nota para o filme?: ")
nota = Number(nota)
primeirofilme.nota = nota






let segundonome = prompt("Digite o nome do segundo filme: ")
segundonome = String(segundonome)
segundofilme.segundonome = segundonome

let segundogenero = prompt("Qual o gênero do segundo filme?: ")
segundogenero = String(segundogenero)
segundofilme.segundogenero = segundogenero

let segundanota = prompt("Digite o valor da sua nota para ele: ")
segundanota = Number(segundanota)
segundofilme.segundanota = segundanota






console.log("Nome do primeiro filme: ", primeirofilme.nome)
console.log("Genêro do primeiro filme: ", primeirofilme.genero)
console.log("A nota do primeiro filme: ", + primeirofilme.nota)


console.log("Nome do segundo filme: ", segundofilme.segundonome)
console.log("Genêro do segundo filme: ", segundofilme.segundogenero)
console.log("A nota do segundo filme: ", + segundofilme.segundanota)


if(segundofilme.segundanota > primeirofilme.nota){

    console.log("O filme com a maior nota é: ", segundofilme.segundonome)
} else{

    console.log("O filme com a maior nota é: ", primeirofilme.nome)
}

