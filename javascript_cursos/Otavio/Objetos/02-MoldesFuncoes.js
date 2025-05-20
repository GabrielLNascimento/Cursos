// Factory Functions / Constructor Functions

// Factory Function
function criaPessoa(nome, sobrenome, idade) {
    return {
        nome,
        sobrenome,
        idade,
        getNomeCompleto() {
            return `${this.nome} ${this.sobrenome}`;
        },
    };
}

const p1 = criaPessoa('Gabriel', 'Liz', 18);
// console.log(p1.getNomeCompleto());

// Constructor Functions
function Pessoa(nome, sobrenome, idade) {
    this.nome = nome;
    this.sobrenome = sobrenome;
    this.idade = idade;
}

const p2 = new Pessoa('Gabriel', 'Liz', 18);
console.log(p2.nome, p2.sobrenome);
