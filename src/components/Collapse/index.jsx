import { useState } from 'react'
import './style.css'
import PropTypes from 'prop-types'

function Collapse({ title, content}){
    // Définit l'état du component: Ouvert(true) ou Fermé(false)
    const [stateCollapse, setStateCollapse] = useState(false)
    return (
        <div onClick={invertStateCollapse} className="collapse">
            <h3>{title}</h3>

            {/* Génère l'icone en fonction de l'état de stateCollapse */}
            {stateCollapse ? (
                <i className="fa-solid fa-chevron-up"></i>
            ) : (
                <i className="fa-solid fa-chevron-down"></i>
            )}

            {/* Vérifie si le Collapse est ouvert et si le "content" est une string. Puis génère le texte. */}
            {stateCollapse &&  typeof(content)==="string" && <div className='collapse__content'>{content}</div>}

            {/* Vérifie si le Collapse est ouvert et si le "content" est un tableau. Puis génère le texte. */}
            {stateCollapse && Array.isArray(content) && 
                    <div className='collapse__content'>
                    {content.map(element => {
                        return <p key={element}>{element}</p>
                    })}
                    </div>
            }
        </div>
    )

    // Fonction d'inversion du state de collapse lorsque l'on clique sur le component
    function invertStateCollapse(){
        setStateCollapse(!stateCollapse)
    }
}

Collapse.propTypes = {
    title: PropTypes.string.isRequired
}

export default Collapse