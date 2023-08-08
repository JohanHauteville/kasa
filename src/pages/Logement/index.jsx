import './style.css'
import { useParams } from 'react-router-dom'
import annonces from '../../assets/annonces.json'
import Rating from '../../components/Rating'
import HostInfo from '../../components/Host_info'

function Logement(){
    const {id} = useParams()
    const logement = annonces.find(annonce=>annonce.id===id)

    return(
        <main className='logement-page'>
            <img src={logement.cover} alt={logement.title} className="logement__cover"/>
            <section className='head__informations'>
                <div>
                    <h2>{logement.title}</h2>
                    <p>{logement.location}</p>
                    <section className='logement__tags'>
                        {
                            logement.tags.map(tag=>{
                                return<div key={tag} className='logement__tags logement__tags--tag'>{tag}</div>
                            })
                        }
                    </section>
                </div>
                <div>
                    <HostInfo name={logement.host.name} picture={logement.host.picture} />
                    <Rating rate={logement.rating}/>
                </div>
            </section>

        </main>
        
    )
}

export default Logement