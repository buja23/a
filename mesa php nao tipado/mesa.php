<?php


class Mesa
{
    private $numero;
    private $status;
}


class Garcom
{
    private $nome;
}


class Produto
{
    protected $codigo;
    protected $descricao;
    protected $estoque;
    protected $preco;
    protected $tipo;
    protected $ingredientes = [];
}


class Ingrediente extends Produto
{
    private $quantidade;
}


class ItemPedido
{
    private $quantidade;
    private $preco;
    private $subtotal;

    // Associações
    private $produto;
    private $garcom;
}


class Pedido
{
    private $numero;
    private $horario;
    private $total;

    // Associação
    private $mesa;
    
    private $itensPedido = [];
}