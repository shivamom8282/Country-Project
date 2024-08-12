import React, { useEffect, useState } from 'react'
import countrydata from '../data'
import CountryCard from './CountryCard'
import Shimmer from './Shimmer'

function CountriesList({query,update1}) {
  const [data,setupd]=useState([])
 
  
  // const arr= data.map((country,i)=>
  // {
  //   // cosole.nlog(country);
  //   return <CountryCard 
  //   key={i}
  //   name={country.name.common} 
  //   region={country.region}
  //   flags={country.flags.svg}
  //    population={country.population}
  //    capital={country.capital}/>
  // })

  useEffect(()=>
  {
 
    fetch('https://restcountries.com/v3.1/all')
    .then((res)=> res.json())
    .then((data)=>
      {
       setupd(data)
        
      })

  },[])
  if(data.length===0)
  {
    return <Shimmer/>
  }

    
  
  return (
    <>
     
  
    <div className='countries-container'>
      
      {countrydata.filter((e)=>
      
  e.name.common.toLowerCase().includes(query)).filter((e)=>

    update1==='' ||   e.region.includes(update1))
  .map((country,i)=>
  {
    
    // console.log(country);
    return <CountryCard 
    key={i}
    name={country.name.common} 
    region={country.region}
    flags={country.flags.svg}
    population={country.population}
    capital={country.capital}
    data={country}
    />
  })
}

    </div>
  </>
  )
}

export default CountriesList
