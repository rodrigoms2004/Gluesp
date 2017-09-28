// config/mongo.js
'use strict'

const debug = require('debug')('gluesp:config:mongo');
const mongojs = require('mongojs');

//let database = process.env.NODE_ENV == 'test' ? 'gluesp-test' : 'gluesp'
// usar crase
//let db = mongojs(`172.16.105.134:27017/${database}`);

let database = process.env.NODE_ENV == 'test' ? 'gluesp-test' : 'gluesp01'
// usar crase
let db = mongojs(`gluesp01:math2017@mongodb.gluesp.kinghost.net:27017/${database}`);


module.exports = db;

/*
Nome
E-mail
DDD Tel Res
DDD Tel Com
DDD Tel Cel
CEP
Estado Civil
Escolaridade
Profissão
Religião
É maçom? (sim ou não)
Crê em Deus? (sim ou não)
Por que deseja se afiliar?

Campo de marcação (Boolean)
Eu estou ciente de que o simples preenchimento deste formulário
não me garante o ingresso à Ordem Maçônica, servindo apenas como
apresentação.
*/
/*
{
nome : "Rodrigo Moraes Silveira",
email : "rodrigoms2004@gmail.com",
foneres : "1143921553",
fonecom : "1188998899",
fonecel : "11973374640",
cep : "04365000",
escolaridade: "Superior Completo",
profissão : "Programador",
religiao : "Cristão",
emacom : false,
creemdeus : true,
motivo: "aumentar meu networking ao mesmo tempo contribuindo para a comunidade maçonica com meus conhecimentos"
}

{ nome : "Rodrigo Moraes Silveira", e-mail : "rodrigoms2004@gmail.com"}
*/
