<?php
declare(strict_types=1);
require_once('Filme.php');
require_once('Ator.php');

class Atuacao {
    private string $tipoAtuacao;
    private Filme $filme;
    private Ator $ator;
}