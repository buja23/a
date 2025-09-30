export class Pessoa {
    _nome;
    _logradouro;
    _numero;
    _complemento;
    _bairro;
    _cep;
    _cidade;
    _uf;
    _fone;
    _dataNascimento;

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