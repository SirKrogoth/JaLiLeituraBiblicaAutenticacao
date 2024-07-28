import usuarioModel from "../usuarioModel";
import iUsuario from "../interface/iUsuario";

async function create(usuario: iUsuario){
    return await usuarioModel.create(usuario);
}

async function findOne(_usuario: string){
    return await usuarioModel.findOne({
        where: {
            usuario: _usuario
        }
    });
}

export default {
    create,
    findOne
}