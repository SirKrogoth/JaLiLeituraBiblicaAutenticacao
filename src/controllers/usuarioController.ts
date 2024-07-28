import { Request, Response } from 'express';
import { v4 as uuid4 } from 'uuid';
import usuarioRepository from '../models/usuario/repository/usuarioRepository';
import iUsuario from '../models/usuario/interface/iUsuario';
import autenticacao from '../secure/autenticacao';
import { StatusCodes } from 'http-status-codes';
import autorizacao from '../secure/autorizacao';

async function create(req: Request, res: Response, next: any){
    try {
        const usuario = req.body as iUsuario;
        usuario.id = uuid4();
        usuario.senha = autenticacao.hashPassword(usuario.senha);

        const result = await usuarioRepository.create(usuario);        

        if(result === null){
            res.status(StatusCodes.BAD_REQUEST).end();
        }

        result.senha = '';

        res.status(StatusCodes.CREATED).json(result).end();

    } catch (error) {
        console.error(error);
        res.status(StatusCodes.BAD_REQUEST).end();
    }
}

async function logarUsuario(req: Request, res: Response, next: any){
    try {
        const usuarioLogin = req.body as iUsuario;

        const verifyAccount = await usuarioRepository.findOne(usuarioLogin.usuario);

        if(verifyAccount === null ) return res.status(StatusCodes.BAD_REQUEST).end();

        const isValid = autenticacao.comparePassword(usuarioLogin.senha, verifyAccount.senha);

        if(isValid){
            const token = await autorizacao.sign(verifyAccount.id);

            return res.status(StatusCodes.OK).json({
                auth: true,
                token
            });
        } else {
            return res.status(StatusCodes.BAD_REQUEST).end();
        }

    } catch (error) {
        console.error(error);
        res.status(StatusCodes.BAD_REQUEST).end();
    }
}

export default {
    create,
    logarUsuario
}