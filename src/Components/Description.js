import React from 'react'
import { useLocation } from 'react-router-dom'
import MovieListe from './MovieListe'
import Navigation from './Navigation'

function Description() {
  const location = useLocation()
  const { movie } = location.state
  



    return (
<div>


<Navigation/>

<div className='container'>
<img src={movie.image}  className='movieimage1' />
  <div className='containertext'>
    <h1 style={{color:'white',marginTop:'100px'}} className='titledescription'> {movie.name} </h1>  
    <p style={{color:'white',marginTop:'100px'}} className='parag'> {movie.overview} </p> 
  </div>
    
</div>    

</div>
    )
}

export default Description
