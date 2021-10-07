const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');


const connection = mysql.createPool({
    host: 'localhost', // O endereço da conexão (localhost).
    user: 'jonatas',     // O nome de usuário do banco.
    password: 'teste', // A senha do banco.
    database: 'appdb'   // O nome do seu database.
});

// Isso ainda é no routes.js! Logo abaixo dos outros códigos.
// Iniciando o app.
const app = express();

// Criando uma rota GET que retorna os dados da tabela usuários.
app.get('/fornecedores', function (req, res) {
    // Conectando ao banco.
    connection.getConnection(function (err, connection) {

        if (err) {
            console.log(err)
            return
        }

        // Executando a query MySQL (selecionar todos os dados da tabela usuário).
        connection.query('select * from fornecedores', function (error, results, fields) {
            // Caso ocorra algum erro, não irá executar corretamente.if (error) throw error;

            // Pegando a 'resposta' do servidor pra nossa requisição. Ou seja, aqui ele vai mandar nossos dados.
            res.send(results)
        });
    });
});

// Iniciando o servidor.
app.listen(3000, () => {
    console.log('Vai no navegador e entra em http://localhost:3000/fornecedores pra ver os usuários cadastrados.');
});


