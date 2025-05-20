// Define Properties - Define Properties

function Produto(nome, preco, estoque) {
    // this.preco = preco;
    // this.nome = nome;

    Object.defineProperty(this, 'estoque', {
        enumerable: true, // mostrar na tela
        value: estoque || 0, // valor
        writable: false, // reescrever
        configurable: false, // configurar
    });

    Object.defineProperties(this, {
        nome: {
            enumerable: true,
            value: nome,
            writable: true,
            configurable: true,
        },
        preco: {
            enumerable: true,
            value: preco,
            writable: false,
            configurable: false,
        },
    })
}

const p1 = new Produto('Camiseta', 20);

console.log(p1);
