/* app/routes/api.js */

'use strict'

const router = require('express').Router();
const MembrosController = require('../controller/MembrosController');

/* middleware para validar o id */
function validatedId(request, response, next) {
  let id = request.params.id;
  if (/^[0-9a-z]{24}$/.test(id)) { /* /^[0-9a-z]i$/ i desativa o case sensitive */
    return next();
  }
  let err = new Error('invalid id');
  err.status = 422; /* unprocessable error */
  next(err);
}

router.get('/membros', MembrosController.list);
router.get('/membros/:id', validatedId, MembrosController.byId);
router.post('/membros', MembrosController.create);
router.put('/membros/:id', validatedId, MembrosController.update);
router.delete('/membros/:id', validatedId, MembrosController.delete);

module.exports = router;