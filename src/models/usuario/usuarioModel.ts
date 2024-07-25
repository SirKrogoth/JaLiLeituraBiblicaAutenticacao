import sequelize, { Model, Optional } from 'sequelize';
import iUsuario from './interface/iUsuario';
import mysqlDb from '../../data/mysqldatabase';

interface iUsuarioCreationAttributes extends Optional<iUsuario, "id">{}

export interface iUsuarioModel extends Model<iUsuario, iUsuarioCreationAttributes>, iUsuario {}

export default mysqlDb.define<iUsuarioModel>('usuarios', {
    id: {
        type: sequelize.STRING(255),
        primaryKey: true,
        allowNull: false
    },
    nome: {
        type: sequelize.STRING(255),
        allowNull: false
    },
    usuario: {
        type: sequelize.STRING(255),
        allowNull: false
    },
    senha: {
        type: sequelize.STRING(255),
        allowNull: false
    },
    idade: {
        type: sequelize.NUMBER,
        allowNull: false
    }
});