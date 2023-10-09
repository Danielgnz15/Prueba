var express = require('express');
var router = express.Router();
var UsuariosController = require ("../controllers/users.c"); 

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send (UsuariosController.todos());
});

/* POST crear user. */
router.post('/', function(req, res, next) {
  
  UsuariosController.crear(req.body)
  res.send (UsuariosController.todos());
});

/* PUT editar user */
router.put('/:nombre', function(req, res, next) {

  UsuariosController.modificar(req.body)
  res.send (UsuariosController.todos())
 // const id = parseInt(req.params.id)
 //const UsuarioModif = UsuariosController.modificar(req.body);
 //users= users.map((user)=>(user.id === id ? {...user, ...UsuarioModif}: user))
  //res.json (users.find((user)=> user.id === id))

})

module.exports = router;
