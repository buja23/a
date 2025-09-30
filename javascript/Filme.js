export class Filme {
    #codigo;
    #titulo;
    #ano;
    #sinopse;
    #preco;

    constructor(codigo, titulo, ano, sinopse, preco) {
        this.#codigo = codigo;
        this.#titulo = titulo;
        this.#ano = ano;
        this.#sinopse = sinopse;
        this.#preco = preco;
    }
}