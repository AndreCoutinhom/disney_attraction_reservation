# Disney Attraction Reservation

<img src="https://wallpapers.com/images/hd/1920x1080-disney-m5qjq1twlj9eg72p.jpg">

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

``` typescript
// main

```

``` typescript
// footer

```

``` typescript
// cadastro

```

``` typescript
// consulta

```

``` typescript
// alteracao

```

``` typescript
// exclusao

```

``` typescript
// listagem

```

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

``` html
<!-- main -->
<main>

</main>

```

``` html
<!-- footer -->
<footer>

<p>Copyright © Andy C. and John C.</p>

</footer>

```

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

#### CSS

``` css
/* header */

```

``` css
/* main */

```

``` css
/* footer */

```

``` css
/* cadastro */


```

``` css
/* consulta */


```

``` css
/* alteracao */


```

``` css
/* exclusao */


```

``` css
/* listagem */


```

### Componentes Funcionais

## <img width="22px" src="https://cdn-icons-png.flaticon.com/128/8484/8484020.png"> Estrutura de Dados

``` json

```

## <img width="22px" src="https://cdn-icons-png.flaticon.com/128/8484/8484020.png"> Participantes

* [André Coutinho de Macedo Silva](https://github.com/AndreCoutinhom);
* [João Caetano Rocha](https://github.com/CaetanoEF).


---
