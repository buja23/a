import { Filme } from './Filme.js';

export class Media {
    #codigo;
    #tipo;
    #situacao;
    #filme;

    constructor(codigo, tipo, situacao, filme) {
        this.#codigo = codigo;
        this.#tipo = tipo;
        this.#situacao = situacao;
        this.#filme = filme;
    }
}