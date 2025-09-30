import { Media } from './media.js';

export class ItemLocacao {
    #valor;
    #dataDevolucao;
    #dataDevolvido;
    #multa;
    #subtotal;
    #media;

    constructor(valor, dataDevolucao, media, dataDevolvido = null, multa = 0, subtotal = 0) {
        this.#valor = valor;
        this.#dataDevolucao = dataDevolucao;
        this.#media = media;
        this.#dataDevolvido = dataDevolvido;
        this.#multa = multa;
        this.#subtotal = subtotal;
    }
}