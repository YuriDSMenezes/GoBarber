module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn(
      'users', // tabela para adicionar a coluna
      'avatar_id', // nome da coluna
      {
        type: Sequelize.INTEGER,
        references: { model: 'files', key: 'id' }, // campo para referenciar (files)
        // todo avatar_ID no tabela users vai ser um id na tabela files
        onUpdate: 'CASCADE', // se for atualizado ela reflete na tabela de users
        onDelete: 'SET NULL',
        allowNull: true,
      }
    );
  },

  down: queryInterface => {
    return queryInterface.removeColumn('users', 'avatar_id');
  },
};
