import { Sequelize } from "sequelize";

const db = new Sequelize('express_auth', 'root', '@Biobses123', {
    host: 'localhost',
    dialect: 'mysql'
});

export default db;