import React, { useState, useEffect } from 'react';
import SearchMovie from '../../components/SearchMovie/SearchMovie';
// import MovieDetails from '../../components/MovieDetails/MovieDetails'
import { Link, useLocation, useSearchParams } from 'react-router-dom';
import css from './movies.module.css';



import { fetchMoviesKeyWord } from '../../services-functions/api-movies';

const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [queryWord, setQueryWord] = useState(searchParams.get('query') ?? "");
  const [queryResponse, setQueryResponse] = useState([]);

  const location = useLocation();
  // const [value, setValue] = useState()
  // console.log(location);

/////////////////////////// 


useEffect(() => {
  searchParams.set('query', queryWord);
  // setSearchParams(searchParams); // Закоментовую, оськільки саме ця частинка відмальовувала мені порожній рядок запиту в url
}, [queryWord, searchParams, setSearchParams]);

//////////////////////
  const onSubmit = formData => {

    setQueryWord(formData);

    return formData;
  };

  useEffect(() => {
    
    const fetchQueryWordData = async () => {
      if (queryWord === false) {return}
      try {
        const queryData = await fetchMoviesKeyWord(queryWord);
        setQueryResponse(queryData);
  
        return queryData;
      } catch (error) {
        console.log(error.message)
      }
    
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
      <SearchMovie onSubmit={onSubmit} defaultValue={queryWord}/>

      <ul className={css.moviesList}>{responseArray}</ul>

      {/* <MovieDetails userQuery={queryResponse}/> */}
    </div>
  );
};

export default Movies;


