import { Sequelize } from 'sequelize'

const sequelize = new Sequelize('sudoku', 'root', '{INSIRA SUA SENHA AQUI}', {
    dialect: 'mysql',
    host: 'localhost',
    port: 3306
})

export default sequelize
