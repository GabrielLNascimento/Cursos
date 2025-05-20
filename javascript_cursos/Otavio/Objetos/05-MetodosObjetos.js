const produto = {
    nome: 'Camiseta',
    preco: 29.9,
};
const outroProduto = produto;
// ambas variaveis apontam para o mesmo valor

// Copiar um objeto
const outroProduto2 = { ...produto, material: 'Algodão' };
// console.log(outroProduto2 === produto)
// console.log(outroProduto2)
// console.log(produto)

// Outra forma de copiar
const outroProduto3 = Object.assign({}, produto, { material: 'Algodão' });
// console.log(outroProduto3 === produto);
// console.log(outroProduto3);

// -----------------------------------------

// console.log(Object.keys(produto));
// console.log(Object.values(produto));

// ----------------------------------------

// Congelar objetos
Object.freeze(produto);
produto.nome = 'Cadeira';
// console.log(produto);

// ----------------------------------------

// capturar informações do objeto
const produto2 = { nome: 'Gabriel' };
// console.log(Object.getOwnPropertyDescriptor(produto2, 'nome'));

// -----------------------------------------

for (let [key, value] of Object.entries(produto)) {
    console.log(`Chave: ${key} e Valor: ${value}`);
}
