import './style.css'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'


function Card({ id, title, picture}){
    const link = "/logement/" + id
    return(
        <Link to={link} className='logement-card'>
            <article className='logement-card'>
                <p>{title}</p>
                <img src={picture} alt={title} />
            </article>
        </Link>
    )
}


Card.propTypes = {
    id: PropTypes.string.isRequired,
    title: PropTypes.string,
    picture: PropTypes.string
}

Card.defaultProps = {
    title: 'Logement',
    picture: 'https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-1.jpg'
}

export default Card

