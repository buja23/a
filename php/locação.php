<?php
require('cliente.php');
require('atendente.php');
require('ItemLocacao.php');

class Locacao{
    private $horario;
    private $total;
    private $cliente;
    private $atendente;
    private $itemlocacao = [];
}