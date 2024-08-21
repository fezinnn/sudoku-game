import '../styles/Game.css'
import { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'

const Game = () => {
    const params = useParams()
    const gameId = params.gameId
    const [board, setBoard] = useState([])
    const [initialBoard, setInitialBoard] = useState([])
    const [solvedBoard, setSolvedBoard] = useState([])
    const token = localStorage.getItem('token')
    const navigate = useNavigate()

    useEffect(() => {
        const fetchGame = async () => {
            try {
                const response = await fetch(`http://localhost:3000/game`, {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                })

                if (!response.ok) {
                    throw new Error('Failed to fetch game')
                }

                const { board, solvedBoard } = await response.json()
                setBoard(board)
                setInitialBoard(board.map(row => row.slice()))
                setSolvedBoard(solvedBoard)
            } catch (error) {
                console.error('Failed to fetch game:', error)
            }
        }

        fetchGame()
    }, [gameId, token])

    const handleSubmit = () => {
        if (JSON.stringify(board) === JSON.stringify(solvedBoard)) {
            navigate('/congratulations')
        } else {
            alert('O tabuleiro não está correto. Por favor, verifique novamente.')
        }
    }

    return (
        <div>
            <h1>Sudoku Game</h1>
            <div className="sudoku-board">
                {board.map((row, rowIndex) => (
                    <div key={rowIndex} className="sudoku-row">
                        {row.map((col, colIndex) => (
                            <input
                                key={colIndex}
                                type="number"
                                value={col || ''}
                                min="1"
                                max="9"
                                readOnly={initialBoard[rowIndex][colIndex] !== null}
                                onChange={(e) => {
                                    const value = parseInt(e.target.value) || null;
                                    const newBoard = board.map((row, rIdx) =>
                                        row.map((col, cIdx) => (rIdx === rowIndex && cIdx === colIndex ? value : col))
                                    );
                                    setBoard(newBoard);
                                }}
                            />
                        ))}
                    </div>
                ))}
            </div>
            <button onClick={handleSubmit}>Submit</button>
        </div>
    )
}

export default Game
