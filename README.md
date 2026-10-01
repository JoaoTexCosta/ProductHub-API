# ProductHub API

API REST para cadastro e gerenciamento de produtos, desenvolvida em
**PHP** com **Laravel 10** e persistência de dados em **MySQL**.

O projeto implementa as operações de **CRUD** (criação, consulta,
atualização e exclusão), utilizando rotas REST, validação de dados e o
ORM Eloquent.

## Funcionalidades

-   Cadastro de produtos
-   Listagem de todos os produtos
-   Consulta de produto por ID
-   Atualização de produtos
-   Exclusão de produtos
-   Validação dos dados recebidos pela API
-   Validação de código único para cada produto
-   Persistência dos dados em banco de dados MySQL

## Tecnologias utilizadas

-   PHP 8.1+
-   Laravel 10
-   MySQL
-   Eloquent ORM
-   Composer
-   Git

## Estrutura do produto

Cada produto possui os seguintes campos:

  Campo             Descrição
  ----------------- ----------------------------------
  `id`              Identificador do produto
  `nome`            Nome do produto
  `descricao`       Descrição do produto
  `marca`           Marca do produto
  `categoria`       Categoria do produto
  `codigo`          Código único do produto
  `preco`           Preço do produto
  `estoque`         Quantidade disponível em estoque
  `data_validade`   Data de validade do produto

## Endpoints

A URL base das rotas é:

`/api/produto`

  Método        Endpoint              Descrição
  ------------- --------------------- -------------------------------
  `GET`         `/api/produto`        Lista todos os produtos
  `GET`         `/api/produto/{id}`   Retorna um produto específico
  `POST`        `/api/produto`        Cadastra um novo produto
  `PUT/PATCH`   `/api/produto/{id}`   Atualiza um produto existente
  `DELETE`      `/api/produto/{id}`   Exclui um produto

## Exemplo de requisição

### Cadastrar um produto

**POST** `/api/produto`

``` json
{
  "nome": "Produto Exemplo",
  "descricao": "Descrição do produto",
  "marca": "Marca Exemplo",
  "categoria": "Categoria Exemplo",
  "codigo": "PROD001",
  "preco": 49.90,
  "estoque": 10,
  "data_validade": "2027-12-31"
}
```

## Validações

No cadastro e na atualização, a API valida os seguintes requisitos:

-   `nome`: obrigatório, texto e máximo de 100 caracteres
-   `descricao`: obrigatória
-   `marca`: obrigatória, texto e máximo de 100 caracteres
-   `categoria`: obrigatória, texto e máximo de 100 caracteres
-   `codigo`: obrigatório, máximo de 20 caracteres e único
-   `preco`: obrigatório, numérico e maior ou igual a zero
-   `estoque`: obrigatório, inteiro e maior ou igual a zero
-   `data_validade`: obrigatória e deve ser uma data válida

## Como executar o projeto

### Pré-requisitos

Antes de iniciar, tenha instalado:

-   PHP 8.1 ou superior
-   Composer
-   MySQL

### 1. Clone o repositório

``` bash
git clone URL_DO_SEU_REPOSITORIO
cd API_projeto
```

### 2. Instale as dependências

``` bash
composer install
```

### 3. Configure o ambiente

Crie o arquivo `.env` a partir do exemplo:

``` bash
cp .env.example .env
```

No Windows, também é possível copiar manualmente o arquivo
`.env.example` e renomear a cópia para `.env`.

Depois, configure a conexão com o MySQL no `.env`:

``` env
DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=laravel
DB_USERNAME=root
DB_PASSWORD=
```

Altere os valores conforme a configuração do seu banco de dados.

### 4. Gere a chave da aplicação

``` bash
php artisan key:generate
```

### 5. Execute as migrations

``` bash
php artisan migrate
```

### 6. Inicie o servidor

``` bash
php artisan serve
```

Por padrão, a aplicação ficará disponível em:

`http://127.0.0.1:8000`

A API poderá ser acessada em:

`http://127.0.0.1:8000/api/produto`

## Organização principal

``` text
app/
├── Http/
│   └── Controllers/
│       └── ProdutoController.php
└── Models/
    └── Produto.php

database/
└── migrations/
    └── 2024_11_01_163656_create_produtos_table.php

routes/
└── api.php
```

-   **ProdutoController:** implementa as operações CRUD e as validações.
-   **Produto:** model Eloquent responsável pela representação dos
    produtos.
-   **Migration:** define a estrutura da tabela `produtos`.
-   **api.php:** registra as rotas REST da aplicação.

## Objetivo do projeto

Este projeto foi desenvolvido com o objetivo de aplicar conceitos de
desenvolvimento backend, construção de APIs REST, operações CRUD,
validação de dados e integração com banco de dados utilizando Laravel.

## Autor

**João Alberto Teixeira da Costa**

GitHub: `JoaoTexCosta`
