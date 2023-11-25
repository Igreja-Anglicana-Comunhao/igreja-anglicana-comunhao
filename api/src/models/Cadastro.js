import Sequelize, { Model } from 'sequelize';

export default class Cadastro extends Model {
  static init(sequelize) {
    super.init({
      nome: {
        type: Sequelize.STRING,
        defaultValue: '',
        validate: {
          len: {
            args: [3, 255],
            msg: 'Nome precisa ter entre 3 e 255 caracteres.',
          },
        },
      },
      email: {
        type: Sequelize.STRING,
        defaultValue: '',
        validate: {
          isEmail: {
            msg: 'E-mail inválido.',
          },
        },
      },
      valor: {
        type: Sequelize.STRING,
        defaultValue: '',
        validate: {
          len: {
            args: [1, 255],
            msg: 'Valor precisa ter entre 1 e 255 caracteres.',
          },
        },
      },
      telefone: {
        type: Sequelize.STRING,
        defaultValue: '',
        validate: {
          len: {
            args: [9, 255],
            msg: 'Tefelone precisa ter entre 9 e 255 caracteres, no formato XX XXXXX-XXXX',
          },
        },
      },
      projeto: {
        type: Sequelize.STRING,
        defaultValue: '',
        validate: {
          len: {
            args: [3, 255],
            msg: 'Nome do projeto precisa ter entre 3 e 255 caracteres.',
          },
        },
      },

    }, {
      sequelize,
    });
    return this;
  }
}
