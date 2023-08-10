import './style.css'
import { useParams, useNavigate } from 'react-router-dom'
import annonces from '../../assets/annonces.json'
import Rating from '../../components/Rating'
import HostInfo from '../../components/Host_info'
import Collapse from '../../components/Collapse'
import Carrousel from '../../components/Carrousel'
import { useEffect } from 'react'

function Logement(){
    const {id} = useParams()
    const logement = annonces.find(annonce=>annonce.id===id)
    const navigate = useNavigate()

    useEffect(()=>{
        if(typeof(logement)==="undefined"){
            navigate("/error")
        }
    }, [logement, navigate])

    return(
        <>
            {typeof(logement)==="undefined" ? 
                ("")
                :
                (
                    <main className='logement-page'>
                        <Carrousel title={logement.title} pictures={logement.pictures}/>
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
                            <div className='host-and-rating'>
                                <HostInfo name={logement.host.name} picture={logement.host.picture} />
                                <Rating rate={logement.rating}/>
                            </div>
                        </section>
                        <section className='body-informations'>
                            <Collapse title="Description" content={logement.description} />
                            <Collapse title="Équipements" content={logement.equipments} />
                        </section>
                    </main>
                )
            }
        </>
    )
}

export default Logement