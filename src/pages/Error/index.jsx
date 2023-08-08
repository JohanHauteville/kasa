import { Link } from "react-router-dom"
import './style.css'

function Error() {
    return(
        <main className="error-page">
            <div>
                <h2>404</h2>
                <p>Oups! La page que vous demandez n'existe pas.</p>
            </div>
            
            <Link to="/" className="returnLink">Retourner sur la page d'accueil</Link>
        </main>
    )
}

export default Error
