import './style.css'
import Card from "../../components/Card"
import annonces from "../../assets/annonces.json"

function CardContainer(){
    return(
        <section className='card-section'>
            {annonces.map( annonce => {
                return <Card title = {annonce.title} picture={annonce.pictures} />
            })}
        </section>
     
    )
}

export default CardContainer