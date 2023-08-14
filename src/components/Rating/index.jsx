import './style.css'
import PropTypes from 'prop-types'

function Rating({ rate }){
    // Définition du tableau de notes à comparer
    const range = [ 1, 2, 3, 4, 5]
    return(
        <div className='rating'>
            {range.map(rangeElem => {
                // Pour chaque notes du tableau:
                // Si la note reçu en props est plus grande
                // Alors on génère une étoile coloré
                // Sinon une étoile grise
                return parseInt(rate,10) >= rangeElem ? (
                    <i key={rangeElem} className="fa-solid fa-star fa-star--colored"></i>
                ) : (
                    <i key={rangeElem} className="fa-solid fa-star fa-star--grey"></i>
                )
            })}
        </div>
    )
}

export default Rating

Rating.propTypes = {
    rate: PropTypes.string.isRequired
}

Rating.defaultProps = {
    rate:"1"
}