import jwt, { VerifyOptions } from 'jsonwebtoken';
import fs from 'fs';

const privateKey = fs.readFileSync('./keys/private.key', 'utf-8');
const publicKey = fs.readFileSync('./keys/public.key', 'utf-8');

const jwtExpires = parseInt(`${process.env.JWT_EXPIRES}`);
const jwtAlgorithm = "RS256";

type Token = { id: number }


function sign(id: number){
    const token: Token = { id }

    return jwt.sign(token, privateKey, {
        expiresIn: jwtExpires,
        algorithm: jwtAlgorithm
    });
}

async function verifiy(token: string){
    try {
        const decoded : Token = await jwt.verify(token, publicKey, {
            algorithms: [jwtAlgorithm]
        } as VerifyOptions) as Token;
    } catch (error) {
        console.error("Mensagem: " + error);
        return null;
    }
}

export default {
    sign,
    verifiy
}