import { Cliente } from './cliente.js';
import { Atendente } from './atendente.js';

export class Locacao {
    #horario;
    #total;
    #cliente;
    #atendente;
    #itensLocacao = [];

    constructor(horario, total, cliente, atendente) {
        this.#horario = horario;
        this.#total = total;
        this.#cliente = cliente;
        this.#atendente = atendente;
    }
    
    adicionarItem(item) {
        this.#itensLocacao.push(item);
    }
}