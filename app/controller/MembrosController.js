/* app/controller/MembrosController.js */
'use strict'

const bluebird = require('bluebird');
const model = bluebird.promisifyAll(require('../model/MembrosModel'));
const debug = require('debug')('gluesp:controller:membros');

let MembrosController = {
  list: (request, response, next) => {
    let query = {};
    if (request.query.name) {
      query.name = new RegExp(request.query.name, 'i');
    }
    model.findAsync(query, request.query.page)
      .then(data => response.json(data))
      .catch(next);
  },
  byId: (request, response, next) => {
    let id = request.params.id;
    model.findOneAsync({ _id: id })
      .then((data) => {
        response.json(data);
      })
      .catch(next);
  },
  create: (request, response, next) => {
    let body = request.body;
    model.insertAsync(body)
      .then(data => response.status(201).json(data))
      .catch(next);
  },
  update: (request, response, next) => {
    let id = request.params.id;
    let body = request.body;
    /* delete body._id << nao entendi o comment, apagar dps */

    model.update({ _id: id }, body, (err, data) => {
      if (err) {
        return next(err);
      }
      response.json(data);
    })
  },
  delete: (request, response, next) => {
    let id = request.params.id;
    model.remove({ _id: id }, (err, data) => {
      if (err) {
        return next(err);
      }
      if (data.n > 0) {
        response.sendStatus(204);
      } else {
        response.sendStatus(404);
      }
    })
  }
};

module.exports = MembrosController;
