import React from 'react'

function Country(props) {
    if(props.countryName == 'Pakistan'){
        throw new Error('Error with the Country Name');
    }
  return (
         <>
          <h1>Hii I am from {props.countryName}</h1>
          </>
       
        
    
  )
}

export default Country
