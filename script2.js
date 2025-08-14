function criarFilme() {
    let titulo = prompt("Digite o título do filme:");
    let genero = prompt("Digite o gênero do filme:");
    let nota = parseFloat(prompt("Digite a nota do filme:"));
    
    return {
        titulo: titulo,
        genero: genero,
        nota: nota
    };
}

let filme1 = criarFilme();
let filme2 = criarFilme();

console.log("Dados do primeiro filme:");
console.log(filme1);
console.log("Dados do segundo filme:");
console.log(filme2);

if (filme1.nota > filme2.nota) {
    console.log("Filme com melhor nota: " + filme1.titulo);
} else if (filme2.nota > filme1.nota) {
    console.log("Filme com melhor nota: " + filme2.titulo);
} else {
    console.log("Ambos os filmes têm a mesma nota!");
}
