const { v4: uuidv4 } = require('uuid');


let usuariosBD = [
    {
        id:123,
        nombre:"Juan"
    },
    {
        id:456,
        nombre:"Alberto"
    },
    {
        id:789,
        nombre:"Maria"
    },
]

class UsuariosModels {
    todos() {
        console.log("models/todos")
        return usuariosBD;
    }
    crear(usuario) {
        usuario.id = uuidv4();
        usuariosBD.push(usuario)
      
    }
    modificar(usuario){
          console.log("usuario") 
    
       // const index = usuariosBD.findIndex(x => x.id == usuario.id);     
       // usuariosBD[index]  = usuario
   
    
        for (var i = 0; i < usuariosBD.length; i++) {
        usuariosBD[i].nombre = usuario.nombre
      } 
    }
    eliminar(id){

    }
}


module.exports = new UsuariosModels();
