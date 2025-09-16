<?php
declare(strict_types=1);

class Pessoa {
    protected string $nome;
    protected string $logradouro;
    protected string $numero;
    protected ?string $complemento; // Pode ser nulo
    protected string $bairro;
    protected string $cep;
    protected string $cidade;
    protected string $uf;
    protected string $fone;
    protected string $dataNascimento; // Considerado como string, poderia ser um objeto DateTime
}