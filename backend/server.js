import express from 'express'
import cors from 'cors'
import { createDatabaseIfNotExists, connectToDatabase } from './database.js'
import routes from './routes.js'

const app = express()
app.use(cors())

app.use(express.json())

app.use(routes)
app.get("/", (req, res) => {
    res.send("SERVIDOR RODANDO")
})

const startApp = async () => {
    await createDatabaseIfNotExists()
    await connectToDatabase()

    const port = 3000;
    app.listen(port, () => {
        console.log(`Server is running on port ${port}`)
    })
}

startApp()
