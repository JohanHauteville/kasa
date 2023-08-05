import './style.css'

function Card({ title, picture}){
    return(
        <article className='logement-card'>
            <p>{title}</p>
            <img src={picture[0]} alt={title} />
            
        </article>
    )
}

export default Card