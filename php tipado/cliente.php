<?php
declare(strict_types=1);
require_once('Pessoa.php');

class Cliente extends Pessoa {
    private int $codigo;
    private string $dataCadastro; // Poderia ser um objeto DateTime
    private string $situacao;
}