import React, { useState, useEffect } from 'react';
import SearchMovie from '../../components/SearchMovie/SearchMovie';
// import MovieDetails from '../../components/MovieDetails/MovieDetails'
import { Link, useLocation } from 'react-router-dom';
import css from './movies.module.css';

import { fetchMoviesKeyWord } from '../../services-functions/api-movies';

const Movies = () => {
  const [queryWord, setQueryWord] = useState('');
  const [queryResponse, setQueryResponse] = useState([]);

  const location = useLocation();
  // console.log(location);

  const onSubmit = formData => {
    console.log(formData);
    setQueryWord(formData);
    // console.log(`new WORD ${formData}`)
    return formData;
  };

  useEffect(() => {
    
    const fetchQueryWordData = async () => {
      if (queryWord === null) {return}
      const queryData = await fetchMoviesKeyWord(queryWord);
      setQueryResponse(queryData);

      return queryData;
    };

    fetchQueryWordData();
  }, [queryWord]);

  const responseArray = queryResponse?.map(movie => {
    return (
      <li key={movie.id} className={css.movieList}>
        <Link state={{ from: location }} to={`/movies/${movie.id}`}>
          {movie.title}
        </Link>
      </li>
    );
  });

  return (
    <div>
      <SearchMovie onSubmit={onSubmit} />

      <ul>{responseArray}</ul>

      {/* <MovieDetails userQuery={queryResponse}/> */}
    </div>
  );
};

export default Movies;
