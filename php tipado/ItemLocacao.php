<?php
declare(strict_types=1);
require_once('Media.php');

class ItemLocacao {
    private float $valor;
    private string $dataDevolucao; // Poderia ser DateTime
    private ?string $dataDevolvido; // Pode ser nulo
    private float $multa;
    private float $subtotal;
    private Media $media;
}