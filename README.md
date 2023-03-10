# CRUD de cadastro de usuário com Clean Architecture

## Descrição

A aplicação foi desenvolvida para fins de aprendizagem, utilizando os padrões de arquitetura limpa e código limpo. O objetivo era obter conhecimento sobre repository pattern, docker, arquitetura limpa, documentação de rotas com swagger e código limpo. A aplicação permite o registro de usuários.

# Arquitetura da Aplicação

- Repository Pattern

![img](/docs/Arquitetura.PNG)

## Requisitos

- Docker
- Docker-compose

## Tecnologias utilizadas

- Node.js
- TypeScript
- Express
- MongoDB
- Swagger --> para documentar as rotas da API.

## Conceitos aplicados

- SOLID
- Injeção de Dependência
- Repository Pattern

## Entidades

<pre>
User {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}</pre>

### Documentação de rotas com Swagger

Para acessar a documentação das rotas da API, após rodar o projeto, acesse: `http://localhost:8000/api-docs/#/`
![img](/docs/DDocumenta%C3%A7%C3%A3o%20da-API-com-swagger.png)

## Crie um .env na pasta raíz para adicionar as variáveis de ambientes

- Recomendo que crie uma .env para deixar a aplicação mais segura.
  exemplo da .env

```bash
PORT=8000

MONGODB_URL=mongodb://localhost:27017
MONGODB_USERNAME=
MONGODB_PASSWORD=

```

## Rodando projeto

```bash
# Instale as dependências com:
$ `yarn install`

# Inicie mongoDB local com docker usando o comando:
$ `yarn mongo-start`

# Para iniciar o projeto, na linha de comando, basta rodar o comando
$ `yarn start:dev`
```

### Endpoints:

Endpoint base da aplicação `http://localhost:8000/`

Para verificar a documentação das rotas da API com o Swagger, basta acessar a seguinte rota:

- `http://localhost:8000/api-docs/#/Users`

#### `POST` -> `http://localhost:8000/users`

```json
{
  "firstName": "Fulano",
  "lastName": "De tal",
  "email": "fulanodetal@site.com",
  "password": "1234"
}
```

Response

```json
{
  "firstName": "Fulano",
  "lastName": "de Tal",
  "email": "fulanodetal@site.com",
  "password": "1234",
  "id": "63dc16c8d5fea198ef0c3d98"
}
```

Obter a lista de todos os usuários cadastrados

#### `GET` -> `http://localhost:8000/users`

```json
{
  {
    "firstName": "Fulano",
    "lastName": "de Tal",
    "email": "fulanodetal@site.com",
    "password": "1234",
    "id": "63dc16c8d5fea198ef0c3d98"
  },
  {
    "firstName": "Beltrano ",
    "lastName": "da Silva",
    "email": "beltranodasilva@site.com",
    "password": "12345",
    "id": "63e6bdf9d9dc8dd49daa1adc"
  }
}
```

Buscar usuário pelo ID

#### `GET` -> `http://localhost:8000/users/:id`

```json
{
  "id": "63e7b5e4d5f7ed8e7b0d887f",
  "firstName": "Teste ",
  "lastName": "de test",
  "email": "fulanodetal@site.com",
  "password": "1234"
}
```

Atualizar usuário pelo ID

#### `PATCH` -> `http://localhost:8000/users/63e6bdf9d9dc8dd49daa1adc`

```json
{
  {
    "firstName": "Fulano",
    "lastName": "dos Santos",

  },

}
```

Response

```json
{
  "firstName": "Fulano",
  "lastName": "dos Santos",
  "email": "fulanodetal@site.com",
  "password": "1234",
  "id": "63dc16c8d5fea198ef0c3d98"
}
```

Deletando usuário

#### `DELETE` -> `http://localhost:8000/users/63e6bdf9d9dc8dd49daa1adc`

Response

```json
{
  "firstName": "Fulano",
  "lastName": "dos Santos",
  "email": "fulanodetal@site.com",
  "password": "1234",
  "id": "63dc16c8d5fea198ef0c3d98"
}
```

# Contato

- Para entrar em contato basta mandar um email para: adsonbruno2@gmail.com
