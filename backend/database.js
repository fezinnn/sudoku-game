import { Sequelize } from 'sequelize'

const sequelize = new Sequelize('mysql://root:{INSIRA SUA SENHA AQUI}@localhost:3306', {
    dialect: 'mysql',
})

const createDatabaseIfNotExists = async () => {
    try {
        await sequelize.query('CREATE DATABASE IF NOT EXISTS sudoku')
        console.log('Database "sudoku" created or already exists.')
    } catch (error) {
        console.error('Error creating database:', error)
    }
};

const connectToDatabase = async () => {
    try {
        await sequelize.authenticate()
        console.log('Connection to database successful.')
        await import('./models.js')
    } catch (error) {
        console.error('Error connecting to database:', error)
    }
};

export { createDatabaseIfNotExists, connectToDatabase, sequelize }
