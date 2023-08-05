import { Link } from "react-router-dom"
import logo from "../../assets/logo.png"
import "./style.css"

function Header(){
    return(
        <header>
            <img src={logo} alt="Logo Kasa"></img>
            <nav>
                <Link to="/" className="navLink">Accueil</Link>
                <Link to="/a-propos" className="navLink">A Propos</Link>
            </nav>
        </header>
    )
}

export default Header