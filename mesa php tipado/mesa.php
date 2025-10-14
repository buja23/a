<?php
declare(strict_types=1);


class Mesa
{
    private int $numero;
    private int $status;
}


class Garcom
{
    private string $nome;
}


class Produto
{
    protected int $codigo;
    protected string $descricao;
    protected int $estoque;
    protected float $preco;
    protected int $tipo;

    /**
     * @var Ingrediente[]
     */
    protected array $ingredientes = [];
}


class Ingrediente extends Produto
{
    private float $quantidade;
}


class ItemPedido
{
    private int $quantidade;
    private float $preco;
    private float $subtotal;
    
    // Associações
    private Produto $produto;
    private Garcom $garcom;
}


class Pedido
{
    private int $numero;
    private DateTime $horario;
    private float $total;
    
    // Associação
    private Mesa $mesa;
    
    /**
     * @var ItemPedido[]
     */
    private array $itensPedido = [];
}