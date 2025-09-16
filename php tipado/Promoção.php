<?php
declare(strict_types=1);
require_once('Filme.php');

class Promocao {
    private string $descricao;
    private float $desconto;
    
    /** @var Filme[] */
    private array $filmes = [];
}