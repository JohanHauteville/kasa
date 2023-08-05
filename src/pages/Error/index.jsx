import { Link } from "react-router-dom"
import './style.css'

function Error() {
    return(
        <div className="error-page">
            <div>
                <h2>404</h2>
                <p>Oups! La page que vous demandez n'existe pas.</p>
            </div>
            
            <Link to="/" className="returnLink">Retourner sur la page d'accueil</Link>
        </div>
    )
}

export default Error
