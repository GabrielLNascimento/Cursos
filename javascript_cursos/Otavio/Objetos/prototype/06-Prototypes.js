function Pessoa(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
}

Pessoa.prototype.nomeCompleto = function () {
    return `${this.nome} ${this.sobrenome}`;
};

const p1 = new Pessoa('Gabriel', 'Liz');
const p2 = new Pessoa('Joao', 'Luizo');

console.dir(p1);
console.dir(p2);
