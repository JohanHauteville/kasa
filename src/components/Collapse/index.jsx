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

            {stateCollapse && <div className='collapse__content'>{content}</div>}
        </div>
    )

    function invertStateCollapse(){
        setStateCollapse(!stateCollapse)
    }
}

Collapse.propTypes = {
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired
}




export default Collapse