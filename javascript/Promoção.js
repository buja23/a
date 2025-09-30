export class Promocao {
    #descricao;
    #desconto;
    #filmes = [];

    constructor(descricao, desconto) {
        this.#descricao = descricao;
        this.#desconto = desconto;
    }

    adicionarFilme(filme) {
        this.#filmes.push(filme);
    }
}