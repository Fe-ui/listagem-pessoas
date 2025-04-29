### Projeto Listagem Pessoas 

-Este projeto é uma aplicação Angular que exibe uma tabela de pessoas com funcionalidades de filtro e paginação.
-Ele utiliza o Angular Material para a interface.
-O frontend consome uma Web API ASP.NET CORE que fornece os dados das pessoas.

## Requisitos

- **Frontend**: Angular 19
- **npm**: 8 ou superior
- **Backend**: API em ASP.NET CORE 8.0

## Instalação

1. Clone o repositório:

    ```bash
    git clone https://github.com/Fe-ui/listagem-pessoas.git
    cd listagem-pessoas
    ```

2. Instale as dependências do frontend:

    ```bash
    npm install
    ```

3. Inicie o servidor de desenvolvimento do frontend:

    ```bash
    ng serve
    ```

    A aplicação frontend estará disponível em [http://localhost:4200](http://localhost:4200).
	
	A aplicação backend estará disponível em [http://localhost:7132](http://localhost:7132).

## Estrutura do Projeto

### Arquivos principais:

#### Frontend

- **`src/app/app.component.ts`**: Componente principal da aplicação.
- **`src/app/app.component.html`**: Template do `AppComponent`, que contém o `<router-outlet>` para a navegação.
- **`src/app/main.ts`**: Ponto de entrada da aplicação, onde o componente standalone `TabelaPessoasComponent` é carregado.
- **`src/app/components/tabela-pessoas/tabela-pessoas.component.ts`**: Componente standalone que exibe a tabela de pessoas.
- **`src/app/components/tabela-pessoas/tabela-pessoas.component.html`**: Template do componente `TabelaPessoasComponent`.

### Dependências importantes:

#### Backend (ASP.NET CORE)

- **cors**: Middleware para permitir requisições entre domínios diferentes.
- **body-parser**: Middleware para análise de corpo de requisições.

#### Frontend (Angular)

- **Angular Material**: Utilizado para criar a interface com componentes como `mat-table`, `mat-paginator`, `mat-form-field` e outros.
- **FormsModule**: Utilizado para o two-way data binding com o `ngModel` nos campos de filtro.

## Funcionalidades

### Filtro

- A tabela de pessoas pode ser filtrada pelo nome utilizando o campo de entrada.

### Tabela

- A tabela exibe as seguintes colunas:
  - **CPF**
  - **Nome**
  - **Gênero**
  - **Endereço**
  - **Idade**
  - **Município**
  - **Estado**

- A tabela é paginada, exibindo 10 registros por vez.

## Como Funciona

### Backend

A API fornece dados de pessoas com a seguinte estrutura JSON:

```json
[
  {
    "cpf": "123.456.789-00",
    "nome": "João Silva",
    "genero": "Masculino",
    "endereco": "Rua A, 123",
    "idade": 30,
    "municipio": "São Paulo",
    "estado": "SP"
  },
  {
    "cpf": "987.654.321-00",
    "nome": "Maria Oliveira",
    "genero": "Feminino",
    "endereco": "Avenida B, 456",
    "idade": 25,
    "municipio": "Rio de Janeiro",
    "estado": "RJ"
  }
]
