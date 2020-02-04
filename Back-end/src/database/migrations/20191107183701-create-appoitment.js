module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('appointments', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      date: {
        allowNull: false,
        type: Sequelize.DATE,
      }, // criar dois relacionamentos(campos) no bd users
      user_id: {
        type: Sequelize.INTEGER,
        references: { model: 'users', key: 'id' }, // faz referência a users
        onUpdate: 'CASCADE', // apaga todos os dados quando ele for deletado
        onDelete: 'SET NULL', // mantém o histórico do agendamento
        allowNull: true,
      },
      provider_id: {
        type: Sequelize.INTEGER,
        references: { model: 'users', key: 'id' }, // faz referência a users
        onUpdate: 'CASCADE', // apaga todos os dados quando ele for deletado
        onDelete: 'SET NULL', // mantém o histórico do agendamento
        allowNull: true,
      },
      canceled_at: {
        type: Sequelize.DATE,
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    });
  },

  down: queryInterface => {
    return queryInterface.dropTable('appointments');
  },
};
