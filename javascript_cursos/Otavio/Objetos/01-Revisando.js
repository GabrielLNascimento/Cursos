// 01 - criando de forma literal
// joga o valor direto
const pessoa = {
    nome: 'Gabriel',
    sobrenome: 'Liz',
};
console.log(pessoa);

// 02 - Acessando valores
// console.log(pessoa.nome, pessoa['nome']);
// console.log(pessoa.sobrenome, pessoa['sobrenome']);

// 03 - Utilizando construtor
const pessoa2 = new Object();
pessoa2.nome = 'Gabriel';
pessoa2.sobrenome = 'Liz';
pessoa2.idade = 18;
console.log(pessoa2);

// 04 - apagando chaves
// delete pessoa2.nome;
// console.log(pessoa2);

// 05 - funções dentro dos objetos
// this - retorna para o proprio objeto
pessoa2.falarNome = function () {
    console.log(`${this.nome} está falando seu nome.`);
};
pessoa2.falarNome();

pessoa2.getAnoNascimento = function () {
    const data = new Date();
    const anoAtual = data.getFullYear();
    return anoAtual - this.idade;
};
console.log(pessoa2.getAnoNascimento());

// for (let chaves in pessoa2) {
//     console.log(chaves, pessoa2[chaves])
// }