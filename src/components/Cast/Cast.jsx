import React from 'react';
import { fetchCast } from '../../services-functions/api-movies';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import css from './cast.module.css';

const Cast = () => {
  const { movieId } = useParams();
  // console.log(movieId);

  const [castDetails, setCastDetails] = useState([]);

  useEffect(() => {
    const details = async () => {
      const responseFetch = await fetchCast(movieId);
      // console.log(responseFetch);
      setCastDetails(responseFetch);
    };

    details();
  }, [movieId]);
  console.log();

  const cast = castDetails?.map(
    ({ id, original_name, profile_path, character }) => {
      const photo = `https://image.tmdb.org/t/p/w300${profile_path}`;

      return (
        <li key={id} className={css.castListItem}>
         <img src={photo} alt="No_Actor_Photo" className={css.castImage}/>
          <h4>{original_name}</h4>
          <p>Role: {character}</p>
        </li>
      );
    }
  );

  return (
    <div className={css.castContainer}>
      <ul className={css.castList}>{cast}</ul>
    </div>
  );
};

export default Cast;
