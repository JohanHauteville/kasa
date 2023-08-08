
import './style.css'
function HostInfo({name, picture}){
    const [hostFirstName, hostLastName] = name.split(' ')
    return (
        <div className='host__informations'>
            <p>{hostFirstName}<br />{hostLastName}</p>
            {
                picture &&
                <img className='host__informations--img' src={picture} alt={name} />
            }
        </div>
    )
}

export default HostInfo