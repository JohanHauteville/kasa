import './style.css'
import Card from "../../components/Card"
import annonces from "../../assets/annonces.json"

function CardContainer() {

    return (
        <section className='card-section'>
            {/* Génère l'intégralité des cards des logements */}
            {annonces &&
                annonces.map(annonce => {
                    return <Card key={annonce.id} id={annonce.id} title={annonce.title} picture={annonce.cover} />
                })}
        </section>
    )
}

export default CardContainer