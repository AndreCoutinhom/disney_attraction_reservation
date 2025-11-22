# Disney Attraction Reservation

<img src="https://wallpapers.com/images/hd/1920x1080-disney-m5qjq1twlj9eg72p.jpg">

<img align="center" src="https://i.imgur.com/5EKtKDd.gif"/>

## <img width="22px" src="https://cdn-icons-png.flaticon.com/128/8484/8484020.png"> Projeto

Este repositório armazena um projeto feito em [Angular](https://angular.dev/) como parte do Projeto Integrador realizado no Centro Universitário Senac. Os integrantes do grupo devem criar uma plataforma funcional usando os fundamentos de estrutura de componentes Web com o framework.

Como decisão do grupo, o tema trabalhado é entitulado "Revisão e reservas de atrações turísticas"; com um nicho definido para atrações dos parques da Disney. Foi determinado que o projeto simula um sistema de reserva de posição em filas de atrações para que os convidados possam, hipoteticamente, salvar um lugar na fila de atrações temáticas.

## <img width="22px" src="https://cdn-icons-png.flaticon.com/128/8484/8484020.png"> Componentes

### Componentes Básicos

Os componentes básicos, inclusos em quase qualquer página, recebem os nomes `header`, `main` e `footer`. Abaixo os atributos em cada arquivo dos componentes:

#### Typescript

``` typescript
// header


```
<img align="center" src="https://i.imgur.com/5EKtKDd.gif"/>

``` typescript
// main

```
<img align="center" src="https://i.imgur.com/5EKtKDd.gif"/>

``` typescript
// footer

```
<img align="center" src="https://i.imgur.com/5EKtKDd.gif"/>

``` typescript
// cadastro

```
<img align="center" src="https://i.imgur.com/5EKtKDd.gif"/>

``` typescript
// consulta

```
<img align="center" src="https://i.imgur.com/5EKtKDd.gif"/>

``` typescript
// alteracao

```
<img align="center" src="https://i.imgur.com/5EKtKDd.gif"/>

``` typescript
// exclusao

```
<img align="center" src="https://i.imgur.com/5EKtKDd.gif"/>

``` typescript
// listagem

```
<img align="center" src="https://i.imgur.com/5EKtKDd.gif"/>

#### HTML

``` html
<!-- header -->
<header>
 
  <h1><a href="http://localhost:4200/">Disney Line Holder</a></h1>

<nav class="menu">

    <a routerLink="/cadastro" routerLinkActive="active">Cadastro</a>
    <a routerLink="/consulta" routerLinkActive="active">Consulta</a>
    <a routerLink="/exclusao" routerLinkActive="active">Exclusão</a>
    <a routerLink="/listagem" routerLinkActive="active">Listagem</a>


  </nav> 
</header>
```
<img align="center" src="https://i.imgur.com/5EKtKDd.gif"/>

``` html
<!-- main -->
<main>

</main>

```
<img align="center" src="https://i.imgur.com/5EKtKDd.gif"/>

``` html
<!-- footer -->
<footer>

<p>Copyright © Andy C. and John C.</p>

</footer>

```
<img align="center" src="https://i.imgur.com/5EKtKDd.gif"/>

``` html
<!-- cadastro -->
<form>
  <label for="input-id">ID</label><br />
  <input
    class="input-simples"
    id="input-id"
    name="input-id"
    placeholder="Digite o ID"
    type="text"
    [(ngModel)]="reservas.id"
  />
  <label for="input-nome">Nome</label><br />
  <input
    class="input-simples"
    id="input-nome"
    name="input-nome"
    placeholder="Digite o seu nome"
    type="text"
    [(ngModel)]="reservas.nome"
  />
  <label for="input-cpf">CPF</label><br />
  <input
    class="input-simples"
    id="input-cpf"
    name="input-cpf"
    placeholder="Digite o número do seu CPF"
    type="text"
    [(ngModel)]="reservas.cpf"
  />
  <label for="input-checkin">Check-in</label><br />
  <input
    class="input-simples"
    id="input-checkin"
    name="input-checkin"
    type="text"
    [(ngModel)]="reservas.checkin"
  />
  <label for="input-checkout">Check-out</label><br />
  <input
    class="input-simples"
    id="input-checkout"
    name="input-checkout"
    type="text"
    [(ngModel)]="reservas.checkout"
  />
  <label for="input-hospedes">Número de hóspedes</label><br />
  <input
    class="input-simples"
    id="input-hospedes"
    name="input-hospedes"
    type="text"
    [(ngModel)]="reservas.hospedes"
  />
  <label for="input-quartos">Número de quartos</label><br />
  <input
    class="input-simples"
    id="input-quartos"
    name="input-quartos"
    type="text"
    [(ngModel)]="reservas.quartos"
  />
  <p>Você deseja reservar o lugar na fila de alguma atração?</p>

        <label>
            <input type="radio" name="resposta" value="sim">
            Sim
        </label>

        <label>
            <input type="radio" name="resposta" value="nao">
            Não
        </label>
    <label for="input-id">ID da atração</label><br />
  <input
    class="input-simples"
    id="input-id"
    name="input-id"
    type="text"
    [(ngModel)]="atracoes.id"
  />
    <label for="input-nome">Nome da atração</label><br />
  <input
    class="input-simples"
    id="input-nome"
    name="input-nome"
    type="text"
    [(ngModel)]="atracoes.nome"
  />
  <label for="input-convidados">Número de convidados</label><br />
<input
  class="input-simples"
  id="input-convidados"
  name="input-convidados"
  type="text"
  [(ngModel)]="atracoes.convidados"
/>
  <label for="input-horario">Horário</label><br />
  <input
    class="input-simples"
    id="input-horario"
    name="input-horario"
    type="text"
    [(ngModel)]="atracoes.horario"
  />
  <label for="input-data">Data</label><br />
  <input
    class="input-simples"
    id="input-data"
    name="input-data"
    type="text"
    [(ngModel)]="atracoes.data"
  />
  <button class="input-submeter" (click)="submeter()">Cadastrar</button>
</form>

```
<img align="center" src="https://i.imgur.com/5EKtKDd.gif"/>

``` html
<!-- consulta -->
<div class="consulta-container">
    <form (ngSubmit)="buscarReserva()">
      <label for="input-codigo">Informe o ID da reserva de hotel:</label>
      <input
        type="number"
        id="input-id"
        name="input-id"
        [(ngModel)]="idBusca"
        class="input-id"
        required
      />
      <button type="submit" class="btn-buscar">Buscar</button>
    </form>
  
    <div *ngIf="reservaEncontrada" class="reserva-dados">
      <h2>Dados da reserva</h2>
      <p><strong>ID:</strong> {{ reservas.id }}</p>
      <p><strong>Nome:</strong> {{ reservas.nome }}</p>
      <p><strong>CPF:</strong> {{ reservas.cpf }}</p>
      <p><strong>Check-in:</strong> {{ reservas.checkin }}</p>
      <p><strong>Check-out:</strong> {{ reservas.checkout }}</p>
      <p><strong>Número de hóspedes:</strong> {{ reservas.hospedes }}</p>
      <p><strong>Número de quartos:</strong> {{ reservas.quartos }}</p>
    </div>
  
    <div *ngIf="erroBusca" class="erro-busca">
      {{ erroBusca }}
    </div>
  </div>

  <div class="consulta-container">
    <form (ngSubmit)="buscarAtracao()">
      <label for="input-codigo">Informe o ID da reserva de hotel:</label>
      <input
        type="number"
        id="input-id"
        name="input-id"
        [(ngModel)]="idBusca"
        class="input-id"
        required
      />
      <button type="submit" class="btn-buscar">Buscar</button>
    </form>
  
    <div *ngIf="atracaoEncontrada" class="atracao-dados">
      <h2>Dados da atração</h2>
      <p><strong>ID:</strong> {{ atracoes.id }}</p>
      <p><strong>Nome:</strong> {{ atracoes.nome }}</p>
      <p><strong>Número de convidados:</strong> {{ atracoes.convidados }}</p>
      <p><strong>Horário:</strong> {{ atracoes.horario }}</p>
      <p><strong>Data:</strong> {{ atracoes.data }}</p>
    </div>
  
    <div *ngIf="erroBusca" class="erro-busca">
      {{ erroBusca }}
    </div>
  </div>

```
<img align="center" src="https://i.imgur.com/5EKtKDd.gif"/>

``` html
<!-- alteracao -->
<h1>Reservas de Hotel</h1>
<form [formGroup]="form" (ngSubmit)="onSubmit()">
  <label>ID:</label>
  <input formControlName="id" type="text" />

  <label>Nome:</label>
  <input formControlName="nome" type="text" />

  <label>CPF:</label>
  <input formControlName="cpf" type="text" />

  <label>Data do Check-in:</label>
  <input formControlName="checkin" type="text" />

  <label>Data do Check-out:</label>
  <input formControlName="checkout" type="text" />

  <label>Número de hóspedes:</label>
  <input formControlName="hospedes" type="text" />

  <label>Número de quartos:</label>
  <input formControlName="quartos" type="text" />

  <button type="submit">Salvar</button>
</form>

<h1>Reservas de atrações</h1>
<form [formGroup]="form" (ngSubmit)="onSubmit()">
  <label>ID:</label>
  <input formControlName="id" type="text" />

  <label>Nome da atração:</label>
  <input formControlName="nome" type="email" />

  <label>Número de convidados:</label>
  <input formControlName="convidados" type="text" />

  <label>Horário:</label>
  <input formControlName="horario" type="text" />

  <label>Data:</label>
  <input formControlName="data" type="text" />

  <button type="submit">Salvar</button>
</form>

```
<img align="center" src="https://i.imgur.com/5EKtKDd.gif"/>

``` html
<!-- exclusao -->
<div class="excluir-container">
    <form (ngSubmit)="excluirReserva()">
      <label for="input-id">Informe o ID da reserva para excluir:</label>
      <input
        type="text"
        id="input-id"
        name="input-id"
        [(ngModel)]="idExcluir"
        class="input-id"
        required
      />
      <button type="submit" class="btn-excluir">Excluir</button>
    </form>
  
    <div *ngIf="mensagemSucesso" class="sucesso-mensagem">
      {{ mensagemSucesso }}
    </div>
  
    <div *ngIf="erroMensagem" class="erro-mensagem">
      {{ erroMensagem }}
    </div>
  </div>

  <div class="excluir-container">
    <form (ngSubmit)="excluirAtracao()">
      <label for="input-id">Informe o ID da atração para excluir a reserva:</label>
      <input
        type="text"
        id="input-id"
        name="input-id"
        [(ngModel)]="idExcluir"
        class="input-id"
        required
      />
      <button type="submit" class="btn-excluir">Excluir</button>
    </form>
  
    <div *ngIf="mensagemSucesso" class="sucesso-mensagem">
      {{ mensagemSucesso }}
    </div>
  
    <div *ngIf="erroMensagem" class="erro-mensagem">
      {{ erroMensagem }}
    </div>
  </div>

```
<img align="center" src="https://i.imgur.com/5EKtKDd.gif"/>

``` html
<!-- listagem -->
<div class="content-container">
    <h1>Reservas de Hotel</h1>
    <table border="1">
      <thead>
        <tr>
          <th>ID</th>
          <th>Nome</th>
          <th>CPF</th>
          <th>Data do Check-in</th>
          <th>Data do Check-out</th>
          <th>Número de hóspedes</th>
          <th>Número de quartos</th>
        </tr>
      </thead>
      <tbody>
        @for (seriado of listaSeriados; track seriado){
        <tr>
          <td>{{ reservas.id }}</td>
          <td>{{ reservas.nome }}</td>
          <td>{{ reservas.cpf }}</td>
          <td>{{ reservas.checkin }}</td>
          <td>{{ reservas.checkout }}</td>
          <td>{{ reservas.hospedes }}</td>
          <td>{{ reservas.quartos }}</td>
        </tr>
        }
      </tbody>
    </table>
    
    <h1>Reservas de atrações</h1>
    <table border="1">
      <thead>
        <tr>
          <th>ID</th>
          <th>Nome</th>
          <th>Número de convidados</th>
          <th>Horário</th>
          <th>Data</th>
        </tr>
      </thead>
      <tbody>
        @for (seriado of listaSeriados; track seriado){
        <tr>
          <td>{{ atracoes.id }}</td>
          <td>{{ atracoes.nome }}</td>
          <td>{{ atracoes.convidados }}</td>
          <td>{{ atracoes.horario }}</td>
          <td>{{ atracoes.data }}</td>
        </tr>
        }
      </tbody>
    </table>
  </div>

```
<img align="center" src="https://i.imgur.com/5EKtKDd.gif"/>

#### CSS

``` css
/* header */

```
<img align="center" src="https://i.imgur.com/5EKtKDd.gif"/>

``` css
/* main */

```
<img align="center" src="https://i.imgur.com/5EKtKDd.gif"/>

``` css
/* footer */

```
<img align="center" src="https://i.imgur.com/5EKtKDd.gif"/>

``` css
/* cadastro */


```
<img align="center" src="https://i.imgur.com/5EKtKDd.gif"/>

``` css
/* consulta */


```
<img align="center" src="https://i.imgur.com/5EKtKDd.gif"/>

``` css
/* alteracao */


```
<img align="center" src="https://i.imgur.com/5EKtKDd.gif"/>

``` css
/* exclusao */


```
<img align="center" src="https://i.imgur.com/5EKtKDd.gif"/>

``` css
/* listagem */


```
<img align="center" src="https://i.imgur.com/5EKtKDd.gif"/>

### Componentes Funcionais

O projeto foi iniciado com um banco de dados de simulação para o preenchimento prévio das tabelas:

## <img width="22px" src="https://cdn-icons-png.flaticon.com/128/8484/8484020.png"> Estrutura de Dados

``` json
{
  "reservas": [
    {
      "id": "R001",
      "nome": "Ana Beatriz Silva",
      "email": "ana.beatriz.silva@email.com",
      "cpf": "123.456.789-00",
      "checkin": "2025-03-15",
      "checkout": "2025-03-20",
      "hospedes": "2",
      "quartos": "1"
    },
    {
      "id": "R002",
      "nome": "Carlos Eduardo Ramos",
      "email": "carlos.eduardo.ramos@email.com",
      "cpf": "987.654.321-99",
      "checkin": "2025-04-01",
      "checkout": "2025-04-05",
      "hospedes": "3",
      "quartos": "2"
    },
    {
      "id": "R003",
      "nome": "Juliana Costa Ferreira",
      "email": "juliana.costa.ferreira@email.com",
      "cpf": "321.654.987-22",
      "checkin": "2025-05-10",
      "checkout": "2025-05-12",
      "hospedes": "1",
      "quartos": "1"
    },
    {
      "id": "R004",
      "nome": "Marcos Vinícius Oliveira",
      "email": "marcos.vinicius.oliveira@email.com",
      "cpf": "456.789.123-44",
      "checkin": "2025-06-20",
      "checkout": "2025-06-25",
      "hospedes": "4",
      "quartos": "2"
    },
    {
      "id": "R005",
      "nome": "Renata Alves Souza",
      "email": "renata.alves.souza@email.com",
      "cpf": "159.753.486-10",
      "checkin": "2025-07-02",
      "checkout": "2025-07-09",
      "hospedes": "2",
      "quartos": "1"
    }
  ],
  
  "atracoes": [
    {
      "id": "A001",
      "nome": "Show de Luzes no Lago",
      "convidados": "250",
      "horario": "19:30",
      "data": "2025-12-20"
    },
    {
      "id": "A002",
      "nome": "Espetáculo Aéreo Fantasia Celeste",
      "convidados": "500",
      "horario": "21:00",
      "data": "2025-12-21"
    },
    {
      "id": "A003",
      "nome": "Parada das Estrelas",
      "convidados": "800",
      "horario": "18:00",
      "data": "2025-12-22"
    },
    {
      "id": "A004",
      "nome": "Concerto Sinfônico ao Ar Livre",
      "convidados": "300",
      "horario": "20:00",
      "data": "2025-12-23"
    },
    {
      "id": "A005",
      "nome": "Apresentação de Teatro Infantil",
      "convidados": "150",
      "horario": "16:00",
      "data": "2025-12-24"
    }
  ]
}
```
<img align="center" src="https://i.imgur.com/5EKtKDd.gif"/>

## <img width="22px" src="https://cdn-icons-png.flaticon.com/128/8484/8484020.png"> Participantes

* [André Coutinho de Macedo Silva](https://github.com/AndreCoutinhom);
* [João Caetano Rocha](https://github.com/CaetanoEF).


---
