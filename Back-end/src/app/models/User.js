import Sequelize, { Model } from 'sequelize';
import bcrypt from 'bcryptjs';

class User extends Model {
  static init(sequelize) {
    // chamando o init do model (pai)
    super.init(
      {
        name: Sequelize.STRING,
        email: Sequelize.STRING,
        password: Sequelize.VIRTUAL,
        password_hash: Sequelize.STRING,
        provider: Sequelize.BOOLEAN,
      },
      {
        sequelize,
      }
    );

    this.addHook('beforeSave', async user => {
      if (user.password) {
        user.password_hash = await bcrypt.hash(user.password, 8); // criptografar(hash)
      }
    }); // trecho de código que e executado quando acontece algo

    return this;
  }

  static associate(models) {
    this.belongsTo(models.File, { foreignKey: 'avatar_id', as: 'avatar' }); // User pertence a File e receber o campo avatar_id // passa o nome da coluna no fore
  }

  checkPassword(password) {
    return bcrypt.compare(password, this.password_hash); // aproveitar que bcrypt já foi instaciado
    // compara as senhas retorna true ou false
  }
}

export default User;
