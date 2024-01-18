import React from 'react'
import { fetchCast } from '../../services-functions/api-movies'
import { useParams  } from 'react-router-dom';
import { useEffect, useState } from 'react';


const Cast = () => {

  const { movieId } = useParams();
// console.log(movieId);

const [castDetails, setCastDetails] = useState([]);

useEffect(() => { 
  const details = async () => {
  const responseFetch = await fetchCast(movieId);
  console.log(responseFetch);
  setCastDetails(responseFetch);
} 

details()}
, [movieId])
console.log()


const cast = castDetails?.map( ({ id, original_name
, profile_path, character }) => {
  const photo = `https://image.tmdb.org/t/p/w300${profile_path}`;

  return (
    <li key={id}>
<img src={photo} alt={original_name} />
<h4>{original_name}</h4>
<p>{character}</p>
    </li>
  )
})



  return (
    <div>Cast

<ul>
  {cast}
</ul>




    </div>
  )
}

export default Cast