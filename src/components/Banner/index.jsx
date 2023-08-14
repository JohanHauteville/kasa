import './style.css'
import PropTypes from 'prop-types'

function Banner({picture, title}){
    return(
        <div className='banner'>
            <img src={picture} alt="Bannière" />
            {title && <h1>{title}</h1>}
        </div>
    )
}

export default Banner

Banner.propTypes = {
    title: PropTypes.string,
    picture: PropTypes.string.isRequired
}

Banner.defaultProps = {
    title: '',
    picture: "/static/media/home.7f6b1f9fd4057cf1b508.png"
}
