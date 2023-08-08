import Banner from "../../components/Banner"
import bannerAbout from "../../assets/about-background.png"
import Collapse from "../../components/Collapse"
import './style.css'
import collapses from '../../assets/collapses.json'

function APropos() {
    return(
        <main className="a-propos-page">
            <Banner picture={bannerAbout} title="" />
            {
                collapses &&
                collapses.map( collapse => {
                    return <Collapse key={collapse.title} title={collapse.title} content={collapse.content} />
                })
            }
        </main>
    )
}

export default APropos