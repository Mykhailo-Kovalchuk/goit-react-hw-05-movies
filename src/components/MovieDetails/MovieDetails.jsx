import { React, useEffect, useState } from 'react';
import Cast from '../Cast/Cast';
import Review from '../Reviews/Reviews';
import { Route, Routes, useParams } from 'react-router-dom';
import { fetchMovieById } from '../../services-functions/api-movies';

//тут зробити лішку в яку будуть приходити жанри, потім проганяти їх через map і повертати розмітку li і вставляти її в розмітку Ul нижче
const MovieDetails = () => {
  const { movieId } = useParams();

  const [movieDetails, setMovieDetails] = useState('');

  useEffect(() => {
    if (!movieId) {
      return;
    }
    const fetchMovieDetails = async () => {
      try {
        const movieResult = await fetchMovieById(movieId);

        setMovieDetails(movieResult);
      } catch (error) {
        console.log(error);
      }
    };

    fetchMovieDetails();
  }, [movieId]);

  console.log(movieDetails);

  const { id, genres, title, vote_average, overview, poster_path } =
    movieDetails;
  const poster = `https://image.tmdb.org/t/p/w500${poster_path}`;

  console.log(poster);
  const ganresList = genres?.map(genre => {
    return <li key={genre.id}>{genre.name}</li>;
  });

  return (
    <>
      <button> GoBack</button>
      <div key={id}>
        <img src={poster} alt="Movie poster" />
        <div>
          <h2>{title}</h2>
          <p> User Score: {vote_average?.toFixed(1)}%</p>

          <h3>Overview</h3>
          <p>{overview}</p>

          <h2>Genres</h2>
          <ul>{ganresList}</ul>
        </div>
      </div>

      <p>Additional infomation</p>
      <ul>cast and reviews (через li зробити) </ul>

      <Routes>
        <Route path={`/movies/${movieId}/:cast`} element={<Cast />} />
        <Route path={`/movies/${movieId}/:review`} element={<Review />} />
      </Routes>
    </>
  );
};

export default MovieDetails;
