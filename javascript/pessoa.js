export class Pessoa {
    /** @type {string} */
    _nome;
    /** @type {string} */
    _logradouro;
    /** @type {string} */
    _numero;
    /** @type {string|null} */
    _complemento;
    /** @type {string} */
    _bairro;
    /** @type {string} */
    _cep;
    /** @type {string} */
    _cidade;
    /** @type {string} */
    _uf;
    /** @type {string} */
    _fone;
    /** @type {string} */
    _dataNascimento;

    // Em JS, não há 'protected', a convenção é usar um underscore _
    constructor(nome, logradouro, numero, bairro, cep, cidade, uf, fone, dataNascimento, complemento = null) {
        this._nome = nome;
        this._logradouro = logradouro;
        this._numero = numero;
        this._bairro = bairro;
        this._cep = cep;
        this._cidade = cidade;
        this._uf = uf;
        this._fone = fone;
        this._dataNascimento = dataNascimento;
        this._complemento = complemento;
    }
}