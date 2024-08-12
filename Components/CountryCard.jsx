import React from 'react'
import { Link } from 'react-router-dom'

function CountryCard({name,population,flags,region,capital,data}) {
  return (
    <div>
        <Link className="country-card" to={`/${name}`} state={data}>
         <div className='flagcontainer'>

                <img src={flags} alt={name} />
         </div>
                <div className="card-text">
                    <h3 className="card-title">{name}</h3>
                    <p>
                    <b>Population: </b>{population}
                    </p>
                    <p>
                    <b>Region: </b>{region}
                    </p>
                    <p>
                    <b>Capital: </b>{capital}
                    </p>
                </div>
        </Link>

      
    </div>
  )
}

export default CountryCard
