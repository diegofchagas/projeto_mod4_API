
import sqlite3 from 'sqlite3'
import { dirname } from'path'
import { fileURLToPath } from 'url'
sqlite3.verbose()
const filePath = dirname(fileURLToPath(import.meta.url)) + '/database.bd'
const bd = new sqlite3.Database(filePath);

// Quando roda o comando acima criar a pasta = database.bd com as inforamções do meu banco de clientes

//==== Clientes
const CLIENTES_SCHEMA = `
CREATE TABLE IF NOT EXISTS "CLIENTES" (
    "ID" INTEGER PRIMARY KEY AUTOINCREMENT,
    "NOME" varchar(68),
    "EMAIL" varchar(68),
    "TELEFONE" varchar(68)
  );`;

const ADD_CLIENTES_DATA = `
INSERT INTO CLIENTES (ID, NOME, EMAIL, TELEFONE)
VALUES 
    (1, 'Diego Chagas', 'diego@gmail.com', '5555-8554'),
    (2, 'Daniel Tavares', 'danielt@hotmail.com', '5555-2958'),
    (3, 'Cristiano Ronaldo', 'cr7@yahoo.com', '5555-9626'),
    (4, 'Karine Chagas', 'karinemchagas@gmail.com', '5555-1010'),
    (5, 'Cintia Cantu', 'cintia_canta@ig.com.br', '5555-1245'),
    (6, 'Inara Almeida', 'inaraalmeida@bol.com.br', '5555-9512'),
    (7, 'Clarck Kent', 'ck@gmail.com', '5555-3028'),
    (8, 'Lois Lene', 'loislene@bol.com', '5555-2830'),
    (9, 'Oliver Queen', 'oliverquen@gmail.com', '5555-2585'),
    (10, 'Felicity Smok', 'felicitysmok@bol.com', '5555-4592')
`

function clienteTable() {
    bd.run(CLIENTES_SCHEMA, (error)=> {
       if (error) console.log("Erro ao criar tabela de clientes");
    });
}


function addClienteTable() {
    bd.run(ADD_CLIENTES_DATA, (error)=> {
       if (error) console.log("Erro ao popular tabela de clientes");
    });
}



bd.serialize( ()=> {
    clienteTable();
    addClienteTable();
});