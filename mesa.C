class Mesa{
    private  int numero, status;
}


class Pedido{
    private int numeto;
    private DateTime horario;
    private double total;
    private Mesa mesa; // associação
    private itemPedido[] Pedido;
}

class itemPedido{
    private int quantidade;
    private double preco, subtotal;
    private Produto Produto; // associação
    private Garcom garcom;// associação
}

class Produto{
    protected int codigo;
    protected string descricao;
    protected int estoque;
    protected double preco;
    protected int tipo;
    protected ingrediente[] ingredientes;
}


class ingrediente : Produto{
    private float quantidade;   
}

class garcom {
    private string nome;
}

//FAZER EM PHP TIPADO E NAO TIPADO
