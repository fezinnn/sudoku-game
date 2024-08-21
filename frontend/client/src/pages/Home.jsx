import '../styles/Home.css'
import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <div className="container">
            <h1 className="title">Bem-vindo ao Sudoku Game</h1>
            <div className="links">
                <Link to="/login" className="link">Login</Link>
                <Link to="/register" className="link">Register</Link>
            </div>
        </div>
    )
}

export default Home
