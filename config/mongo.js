/* app/config/mongo.js */
'use strict'

const debug = require('debug')('gluesp:config:mongo');
const mongojs = require('mongojs');
const database = process.env.NODE_ENV == 'test' ? 'gluesp-test' : 'gluesp01';
const db = mongojs(`gluesp01:math2017@mongodb.gluesp.kinghost.net:27017/${database}`);
/* usar crase para interpolação rodrigo, depois apagar este comment */

module.exports = db;