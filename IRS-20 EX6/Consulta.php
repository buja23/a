<?php

require_once 'Paciente.php';
require_once 'Agenda.php';
require_once 'Horario.php';

class Consulta
{
    private $historico;
    private $horario;
    private $tipo;

    // Propriedades que representam as associações
    private $paciente;
    private $agenda;
    private $horarioDetalhes; // Representa a associação com a classe Horario

    // Getters, setters e outros métodos podem ser adicionados aqui.
}