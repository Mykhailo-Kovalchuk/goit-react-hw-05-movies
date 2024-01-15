import React, { useState, useEffect } from 'react';
import SearchMovie from '../../components/SearchMovie/SearchMovie';
// import MovieDetails from '../../components/MovieDetails/MovieDetails'

import { fetchMoviesKeyWord } from '../../services-functions/api-movies';

const Movies = () => {
  const [queryWord, setQueryWord] = useState('');
  const [queryResponse, setQueryResponse] = useState([]);

  const onSubmit = formData => {
    console.log(formData);
    setQueryWord(formData);
    // console.log(`new WORD ${formData}`)
    return formData;
  };

  useEffect(() => {
    const fetchQueryWordData = async () => {
      const queryData = await fetchMoviesKeyWord(queryWord);

      // setQueryWord(result);
      // console.log(queryData.results)
      setQueryResponse(queryData.results);

      return queryData.results;
    };

    fetchQueryWordData();
  }, [queryWord]);

  console.log(queryResponse);

const responseArray = queryResponse?.map(movie => {
  return (
    <li key={movie.id}>
        {/* <Link to={`/movies/${movie.id}`}> */}
        {movie.title}
        {/* </Link> */}
      </li>
  )
})


  return (
    <div>
      <SearchMovie onSubmit={onSubmit} />

<ul>
{responseArray}
</ul>



      {/* <MovieDetails userQuery={queryResponse}/> */}
    </div>
  );
};

export default Movies;
