import Banner from "../../components/Banner"
import bannerHome from '../../assets/home.png'
import CardContainer from "../../components/CardContainer"
import './style.css'


function Home(){

    return(
        <main>
            <Banner picture={bannerHome} title="Chez vous, partout et ailleurs" />
            <CardContainer />
        </main>
    )
}

export default Home