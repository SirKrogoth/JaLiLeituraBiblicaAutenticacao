import request from 'supertest';
import app from '../src/app/app';
import usuarioRepository from '../src/models/usuario/repository/usuarioRepository';
import iUsuario from '../src/models/usuario/interface/iUsuario';
import autorizacao from '../src/secure/autorizacao';
import autenticacao from '../src/secure/autenticacao';
import { v4 as uuid4 } from 'uuid';

const _id = '7dbd667a-5607-4893-bbc7-70d67c03aa74';
const _nome = 'Usuário Teste'
const _usuario = 'Tester';
const _hashSenha = '$2a$10$wQdg4lYB3DxL0pQBt.ppzebwc265OsaKJRnFjR8P9j5gR7LW4IOHW';
const _testSenha = '123456';

let jwt: string;
let testUsuarioId: string;

beforeAll(async() => {
    jwt = autorizacao.sign(_id);
});

describe('Criando um novo usuário no sistema.', () => {
    it('POST /usuario - 200 OK', async () => {
        const payload = { 
            id: uuid4(),
            nome: 'Usuário Teste',
            usuario: 'Tester',
            senha: '123456',
            idade: 99
        }

        const resultado = await request(app)
                                    .post('/usuario')
                                    .set('x-access-token', jwt)
                                    .send(payload);

        expect(resultado.status).toEqual(201);
    })
});