import './style.css'
import { useState, useEffect } from 'react'
import PropTypes from 'prop-types'

function Carrousel({title,pictures}){
    const [actualIndex, setActualIndex] = useState(0)
    const [picture,setPicture] = useState(pictures[actualIndex])

    // Change l'image si un changement est détecté sur "actualIndex" ou "pictures"
    useEffect(()=>{
        setPicture(pictures[actualIndex])
    },[actualIndex,pictures])

    function nextPicture() {
        setActualIndex(actualIndex + 1)
        actualIndex>=(pictures.length-1) && setActualIndex(0)
    }

    function previousPicture() {
        setActualIndex(actualIndex - 1)
        actualIndex===0 && setActualIndex((pictures.length-1))
    }
  
    return(
        <div className='carrousel'>
            {/* Génère l'image */}
            <img src={picture} alt={title} className="carrousel__cover"/>

            {/* Si le tableau des images est plus grand que 1, on génère les boutons */}
            {pictures.length > 1 && 
                <div>
                    <div className='carrousel__buttons'>
                        <i className="fa-solid fa-chevron-left carrousel__left-button" onClick={previousPicture}></i>
                        <i className="fa-solid fa-chevron-right carrousel__right-button" onClick={nextPicture}></i>
                    </div>
                    <span className='carrousel__pagination'>
                        {actualIndex+1}/{pictures.length}
                    </span>
                </div>
            }
        </div>
    )
}

export default Carrousel


Carrousel.propTypes = {
    title: PropTypes.string,
    pictures: PropTypes.array.isRequired
}

Carrousel.defaultProps = {
    title: 'bannières',
    pictures:[ "/static/media/home.7f6b1f9fd4057cf1b508.png"]
}