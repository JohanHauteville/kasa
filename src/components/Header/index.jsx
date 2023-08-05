import { Link } from "react-router-dom"
import logo from "../../assets/logo.png"
import "./style.css"
// import { useLocation } from "react-router-dom"

function Header(){
    // const actualLocation = useLocation()
    return(
        <header>
            <img src={logo} alt="Logo Kasa"></img>
            <nav>
                <Link to="/" className="navLink" >Accueil</Link>
                <Link to="/a-propos" className="navLink">A Propos</Link>
            </nav>
            {/* {console.log(actualLocation)} */}
        </header>
    )
}

export default Header