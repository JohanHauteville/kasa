import { Link } from "react-router-dom"
import logo from "../../assets/logo.png"
import "./style.css"
import { useLocation } from "react-router-dom"

function Header(){
    const actualLocation = useLocation()
    return(
        <header>
            <img src={logo} alt="Logo Kasa"></img>
            <nav>
                {actualLocation.pathname==="/" ? 
                (
                    <Link to="/" className="navLink navLink--actived">Accueil</Link>
                ):(
                    <Link to="/" className="navLink">Accueil</Link>
                )}
                {actualLocation.pathname==="/a-propos" ? 
                (
                    <Link to="/a-propos" className="navLink navLink--actived">A Propos</Link>
                ):(
                    <Link to="/a-propos" className="navLink">A Propos</Link>
                )}
            </nav>
            {console.log(actualLocation.pathname)}
        </header>
    )
}

export default Header
