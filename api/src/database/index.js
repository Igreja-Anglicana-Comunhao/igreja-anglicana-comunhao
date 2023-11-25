import Sequelize from 'sequelize';
import databaseConfig from '../config/database';
import Cadastro from '../models/Cadastro';
import User from '../models/User';

const models = [Cadastro, User];

const connection = new Sequelize(databaseConfig);

models.forEach((model) => model.init(connection));
