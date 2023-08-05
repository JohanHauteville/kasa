
import bannerImg from '../../assets/home.png'
import './style.css'


function Banner(){
    return(
        <div className='banner'>
            <img src={bannerImg} alt="Bannière" />
            <h1>Chez vous, partout et ailleurs</h1>
        </div>
    )
}

export default Banner