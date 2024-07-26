import { Request, Response } from 'express';
import autorizacao from '../../secure/autorizacao';
import { StatusCodes } from 'http-status-codes';


async function validarAutorizacao(req: Request, res: Response, next: any){
    try {
        const token = req.headers['x-access-token'] as string;
        
        if(!token) return res.status(StatusCodes.UNAUTHORIZED).end();

        const payload = await autorizacao.verifiy(token);
        if(!payload) return res.status(StatusCodes.UNAUTHORIZED).end();

        res.locals.payload = payload;

        next();
        
    } catch (error) {
        res.status(StatusCodes.BAD_REQUEST).end();
    }
}

export {
    validarAutorizacao
}