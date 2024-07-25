import usuarioModel from "../usuarioModel";
import iUsuario from "../interface/iUsuario";

function create(usuario: iUsuario){
    return usuarioModel.create(usuario);
}

export default {
    create
}