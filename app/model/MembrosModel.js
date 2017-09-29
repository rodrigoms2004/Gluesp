/* app/model/MembrosModel.js */
'use strict'

const db = require('../../config/mongo');

const MAX_RESULTS = 5;

let MembrosModel = {
  find: (query, page = 0, callback) => {
    db.collection('membros')
      .find(query)
      .limit(MAX_RESULTS)
      .skip(MAX_RESULTS * page, callback); /* pula os primeiros MAX_RESULTS */
  },
  findOne: (query, callback) => {
    if (query._id) {  /* se a query for uma _id */
      query._id = db.ObjectId(query._id);
    }
    db.collection('membros').findOne(query, callback);
  },
  insert: (data, callback) => {
    db.collection('membros').insert(data, callback);
  },
  update: (query, data, callback) => {
    if (query._id) {
      query._id = db.ObjectId(query._id);
    }
    db.collection('membros').update(query, { $set: data }, callback);
  },
  remove: (query, callback) => {
    if (query._id) {
      query._id = db.ObjectId(query._id);
    }
    db.collection('membros').remove(query, callback);
  }
};

module.exports = MembrosModel;
