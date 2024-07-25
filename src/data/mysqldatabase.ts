import { Sequelize } from "sequelize";

const dbName = process.env.MYSQL_NAME!;
const dbUser = process.env.MYSQL_USER!;
const dbHost = process.env.MYSQL_HOST;
const dbPass = process.env.MYSQL_PASSWORD;

const sequelize = new Sequelize(dbName, dbUser, dbPass, {
    dialect: 'mysql',
    host: dbHost,
    logging: false
});

export default sequelize;