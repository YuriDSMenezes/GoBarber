import Sequelize, { Model } from 'sequelize';

class File extends Model {
  static init(sequelize) {
    // chamando o init do model (pai)
    super.init(
      {
        name: Sequelize.STRING,
        path: Sequelize.STRING, // nome do arquivo
        url: {
          type: Sequelize.VIRTUAL,
          get() {
            return `http://localhost:4000/files/${this.path}`; // /files e a rota para o usuario acessar os arquivos
          },
        },
      },
      {
        sequelize,
      }
    );

    return this;
  }
}

export default File;
