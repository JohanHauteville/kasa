
// import bannerImg from '../../assets/home.png'
import './style.css'


function Banner({picture, title}){
    return(
        <div className='banner'>
            <img src={picture} alt="Bannière" />
            <h1>{title}</h1>
        </div>
    )
}

export default Banner