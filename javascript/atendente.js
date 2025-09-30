import { Pessoa } from './pessoa.js';

export class Atendente extends Pessoa {
    #matricula;

    constructor(nome, logradouro, numero, bairro, cep, cidade, uf, fone, dataNascimento, matricula) {
        super(nome, logradouro, numero, bairro, cep, cidade, uf, fone, dataNascimento);
        this.#matricula = matricula;
    }
}