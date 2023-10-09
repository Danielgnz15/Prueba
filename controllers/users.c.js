var UsuariosModels = require("../models/users.m"); 

class UsuariosController {
    todos() {
       return UsuariosModels.todos();
    }
    uno(id) {

    }
    crear(usuario) {
       UsuariosModels.crear(usuario);
    }
    modificar(usuario){
      //return usuario
      UsuariosModels.modificar(usuario)
    }
    eliminar(id){

    }
}


module.exports = new UsuariosController();
