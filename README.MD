
# API RESTAURANTE- SHARK BISTRÔ - Resilia


Projeto Final do módulo 4 do curso de Web Dev Full Stack para a Resilia Educação. Nessa aplicação, foi desenvolvida uma API- REST do zero, para poder controlar todos os clientes do Restaurante SHARK BISTRÔ. 


# Tecnologias utilizadas

- NODE.JS/SQLITE3/NPM/NODEMON/CORS/JEST/SUPERTEST


# Passo a Passo da API-REST

Abra o terminal/Powershell e rode os comandos abaixo:


Instalando os pacotes:
```
npm install
npm init (para comerçar a criar o projeto)
npm install express
npm install jest
npm install superteste
npm install sqlite3
npm install nodemon
```

Criando o banco de dados:
```
npm run database
```

Iniciando o servidor:
```
npm start
```

---

## Rotas implementadas

### Cliente

 * **GET /clientes**
 
    Estrutura da resposta
    ```
    {
        usuarios: [
            {
                "nome" : <String>,
                "email: <String>,
                "telefone" : <String>
            }
        ],
        erro: <Boleano>

    }
    ```

 * **GET /clientes/email/{email}**
 
    Estrutura da resposta
    ```
    {
        usuarios: [
            {
                "nome" : <String>,
                "email: <String>,
                "telefone" : <String>
            }
        ],
        erro: <Boleano>

    }
    ```

 * **POST /clientes**

     Estrutura da requisição
    ```
    {
        "nome" : <String>,
        "email: <String>,
        "telefone" : <String>
    }
    ```

    Estrutura da resposta
    ```
    {   
        mensagem: <String>
        cliente: {
            "nome" : <String>,
            "email: <String>,
            "telefone" : <String>
        },
        erro: <Boleano>
    }
    ```

 * **PUT /clientes/id/{id}**

     Estrutura da requisição
    ```
    {
        "nome" : <String>,
        "email: <String>,
        "telefone" : <String>
    }
    ```

    Estrutura da resposta
    ```
    {   
        mensagem: <String>
        cliente: {
            "nome" : <String>,
            "email: <String>,
            "telefone" : <String>
        },
        erro: <Boleano>
    }
    ```

 * **DELETE /clientes/id/{id}**

    Estrutura da resposta
    ```
    {   
        mensagem: <String>
        erro: <Boleano>
    }
    ```
---

## Rodando teste
Para rodar os teste, utilizando o framework `Jest` e o [`Supertest`](https://jestjs.io/pt-BR/docs/testing-frameworks#expressjs) basta rodar o comando abaixo:
```
npm test
```

# Desenvolvedor

- Diego Chagas
