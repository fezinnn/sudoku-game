import '../styles/Congratulations.css'
import { Link } from 'react-router-dom'

const Congratulations = () => {
    return (
        <div className="container">
            <h1 className="title">Parabéns!</h1>
            <p className="text">Você completou o Sudoku corretamente.</p>
            <Link to="/game">
                <button className="button">Jogar Novamente</button>
            </Link>
        </div>
    )
}

export default Congratulations
