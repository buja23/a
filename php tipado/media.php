<?php
declare(strict_types=1);
require_once('Filme.php');

class Media {
    private int $codigo;
    private string $tipo;
    private string $situacao;
    private Filme $filme;
}