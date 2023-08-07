import Banner from "../../components/Banner"
import bannerAbout from "../../assets/about-background.png"
import Collapse from "../../components/Collapse"
import './style.css'

function APropos() {
    return(
        <main>
            <Banner picture={bannerAbout} title="" />
            <Collapse title="ceci est un test" content="Ma sweetie c'est la plus belle du monde entier. J'ai énormément de chance d'être avec elle." />
        </main>

    )
}

export default APropos