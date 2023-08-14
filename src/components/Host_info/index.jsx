import './style.css'
import PropTypes from 'prop-types'

function HostInfo({name, picture}){
    // Décomposition du prénom et du nom du props "name"
    const [hostFirstName, hostLastName] = name.split(' ')
    return (
        <div className='host__informations'>
            <p>{hostFirstName}<br />{hostLastName}</p>
            {
                picture &&
                <img className='host__informations--img' src={picture} alt={name} />
            }
        </div>
    )
}

export default HostInfo

HostInfo.propTypes = {
    name: PropTypes.string.isRequired,
    picture: PropTypes.string.isRequired
}

HostInfo.defaultProps = {
    name: 'Utilisateur Inconnu'
}