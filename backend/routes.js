import express from 'express'
import jwt from 'jsonwebtoken'
import fs from 'fs'
import { Player } from './models.js'
import auth from './middleware/auth.js'

const router = express.Router()


const generateRandomBoard = () => {
    const boards = [
        [
            [5, 3, null, null, 7, null, 9, 1, null],
            [6, 7, null, 1, 9, 5, 3, null, null],
            [1, 9, 8, 3, null, null, 5, 6, 7],
            [8, 5, 9, 7, 6, 1, null, null, 3],
            [4, null, null, 8, 5, 3, 7, 9, 1],
            [7, 1, 3, 9, 2, null, null, 5, 6],
            [9, 6, 1, 5, 3, 7, 2, 8, null],
            [null, null, 7, 4, 1, 9, null, 3, 5],
            [3, null, 5, null, 8, null, 1, 7, 9]
        ],
        [
            [null, null, null, 4, null, 8, 6, null, 2],
            [4, 6, 8, null, 7, 2, null, 1, 3],
            [7, null, 2, 6, 9, null, 5, 8, 4],
            [2, 9, null, 7, 8, 4, null, 3, 6],
            [6, 4, 7, null, 5, null, 8, 2, null],
            [null, 8, null, 9, 2, 6, 4, 5, null],
            [9, 2, 4, null, 1, null, 7, 6, 8],
            [null, 7, null, 8, 6, null, 2, 4, null],
            [8, null, 6, 2, 4, 7, null, null, null]
        ]
    ];

    const randomIndex = Math.floor(Math.random() * boards.length)

    return { board: boards[randomIndex], index: randomIndex }
}

const generateSolvedBoard = (index) => {
    const boards = [
        [
            [5, 3, 4, 6, 7, 8, 9, 1, 2],
            [6, 7, 2, 1, 9, 5, 3, 4, 8],
            [1, 9, 8, 3, 4, 2, 5, 6, 7],
            [8, 5, 9, 7, 6, 1, 4, 2, 3],
            [4, 2, 6, 8, 5, 3, 7, 9, 1],
            [7, 1, 3, 9, 2, 4, 8, 5, 6],
            [9, 6, 1, 5, 3, 7, 2, 8, 4],
            [2, 8, 7, 4, 1, 9, 6, 3, 5],
            [3, 4, 5, 2, 8, 6, 1, 7, 9]
        ],
        [
            [1, 5, 9, 4, 3, 8, 6, 7, 2],
            [4, 6, 8, 5, 7, 2, 9, 1, 3],
            [7, 3, 2, 6, 9, 1, 5, 8, 4],
            [2, 9, 5, 7, 8, 4, 1, 3, 6],
            [6, 4, 7, 1, 5, 3, 8, 2, 9],
            [3, 8, 1, 9, 2, 6, 4, 5, 7],
            [9, 2, 4, 3, 1, 5, 7, 6, 8],
            [5, 7, 3, 8, 6, 9, 2, 4, 1],
            [8, 1, 6, 2, 4, 7, 3, 9, 5]
        ]
    ];

    return boards[index]
}


// Rotas de autenticação
router.post('/players/register', async (req, res) => {
    const { username, password } = req.body
    try {
        const existingPlayer = await Player.findOne({ where: { username } })
        if (existingPlayer) {
            return res.status(400).json({ message: 'Esse username já existe' })
        }
    
        const newPlayer = await Player.create({
            username,
            password
        })
    
        res.status(201).json({ message: 'Player criado', playerId: newPlayer.id })
    } catch (error) {
        console.error(error)
        res.status(500).json({ message: 'Algo deu errado!' })
    }
})

router.post('/players/login', async (req, res) => {
    const { username, password } = req.body
    try {
        const player = await Player.findOne({ where: { username, password } })

        if (!player) {
            return res.status(400).json({ message: 'Credenciais inválidas!' })
        }

        const privateKey = fs.readFileSync('./keys/private.key', 'utf8');
        const token = jwt.sign({ id: player.id }, privateKey, {
            algorithm: 'RS256',
            expiresIn: '1h'
        })

        res.status(200).json({
            token,
            playerId: player.id,
            score: player.points  
        })
    } catch (error) {
        console.error(error)
        res.status(500).json({ message: 'Algo deu errado' })
    }
});



router.get('/game', [auth, handleGame])

async function handleGame(req, res){
    try{
        const { board, index } = generateRandomBoard()
        const solvedBoard = generateSolvedBoard(index)
        res.status(200).json({ board, solvedBoard })
    } catch(erro){
        console.error(erro)
        res.status(500).json({
            message: "Algo deu errado ao retornar o tabuleiro"
        })
    }
}

export default router
