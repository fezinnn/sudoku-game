import { Sequelize, DataTypes } from 'sequelize'

const sequelize = new Sequelize('sudoku', 'root', '{INSIRA SUA SENHA AQUI}', {
    dialect: 'mysql',
    host: 'localhost',
    port: 3306
})

sequelize.sync()
  .then(() => {
    console.log('Database synchronized')
  })
  .catch((error) => {
    console.error('Error synchronizing database:', error)
  })

const Player = sequelize.define('player', {
    id: { type: DataTypes.INTEGER, autoIncrement: true, allowNull: false, primaryKey: true },
    username: { type: DataTypes.STRING, allowNull: false },
    password: { type: DataTypes.STRING, allowNull: false },
})

export { sequelize, Player }
