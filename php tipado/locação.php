<?php
declare(strict_types=1);

require_once('Cliente.php');
require_once('Atendente.php');
require_once('ItemLocacao.php');

class Locacao {
    private string $horario; // Poderia ser DateTime
    private float $total;
    private Cliente $cliente;
    private Atendente $atendente;
    
    /** @var ItemLocacao[] */
    private array $itensLocacao = [];
}