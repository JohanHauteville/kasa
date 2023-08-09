import { useState } from 'react'
import './style.css'
import PropTypes from 'prop-types'

function Collapse({ title, content}){
    const [stateCollapse, setStateCollapse] = useState(false)
    return (
        <div onClick={invertStateCollapse} className="collapse">
            <h3>{title}</h3>
            {stateCollapse ? (
                <i className="fa-solid fa-chevron-down"></i>
            ) : (
                <i className="fa-solid fa-chevron-up"></i>
            )}

            {stateCollapse &&  typeof(content)==="string" && <div className='collapse__content'>{content}</div>}

            {stateCollapse && Array.isArray(content) && 
                    <div className='collapse__content'>
                    {content.map(element => {
                        return <p key={element}>{element}</p>
                    })}
                    </div>
            }
        </div>
    )

    function invertStateCollapse(){
        setStateCollapse(!stateCollapse)
    }
}

Collapse.propTypes = {
    title: PropTypes.string.isRequired
}




export default Collapse