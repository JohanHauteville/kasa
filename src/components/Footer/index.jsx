import './style.css'
import logoWhite from '../../assets/logo-white.png'

function Footer(){
    return(
        <footer>
            <img src={logoWhite} alt="logo-white-kasa" />
            <p>© 2023 Kasa. All rights reserved</p>
        </footer>
    )
}

export default Footer