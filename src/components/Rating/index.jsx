import './style.css'

function Rating({ rate }){
    const range = [ 1, 2, 3, 4, 5]
    return(
        <div className='rating'>
            {range.map(rangeElem => {
                console.log(rate)
                return rate >= rangeElem ? (
                    <i key={rangeElem} className="fa-solid fa-star fa-star--colored"></i>
                ) : (
                    <i key={rangeElem} className="fa-solid fa-star fa-star--grey"></i>
                )
            })}
        </div>
    )
}

export default Rating