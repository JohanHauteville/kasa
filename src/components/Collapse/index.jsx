import { useState } from 'react'
import './style.css'

function Collapse({ title, content}){
    const [stateCollapse, setStateCollapse] = useState(false)

    return (
        <div onClick={invertStateCollapse}>
            <h3>{title}</h3>
            {!stateCollapse ? (
                <p></p>
            ):(
                <p>{content}</p>
            )}
        </div>
    )

    function invertStateCollapse(){
        setStateCollapse(!stateCollapse)
    }
}




export default Collapse