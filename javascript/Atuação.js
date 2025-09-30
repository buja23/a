import { Filme } from './Filme.js';
import { Ator } from './Ator.js';

export class Atuacao {
    #tipoAtuacao;
    #filme;
    #ator;

    constructor(tipoAtuacao, filme, ator) {
        this.#tipoAtuacao = tipoAtuacao;
        this.#filme = filme;
        this.#ator = ator;
    }
}