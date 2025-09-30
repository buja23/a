import { Pessoa } from './pessoa.js';

export class Cliente extends Pessoa {
    #codigo;
    #dataCadastro;
    #situacao;

    constructor(nome, logradouro, numero, bairro, cep, cidade, uf, fone, dataNascimento, codigo, dataCadastro, situacao) {
        super(nome, logradouro, numero, bairro, cep, cidade, uf, fone, dataNascimento);
        this.#codigo = codigo;
        this.#dataCadastro = dataCadastro;
        this.#situacao = situacao;
    }
}