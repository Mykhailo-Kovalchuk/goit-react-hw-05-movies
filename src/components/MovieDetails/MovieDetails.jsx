import { React, useEffect, useState, useRef, lazy, Suspense } from 'react';

import {
  Route,
  Routes,
  useParams,
  NavLink,
  useLocation,
  Link,
} from 'react-router-dom';
import { fetchMovieById } from '../../services-functions/api-movies';
import css from './movieDetails.module.css';

const Cast = lazy(() => import('../Cast/Cast'));
const Reviews = lazy(() => import('../Reviews/Reviews'));

//тут зробити лішку в яку будуть приходити жанри, потім проганяти їх через map і повертати розмітку li і вставляти її в розмітку Ul нижче
const MovieDetails = () => {
  const defaultImg = 'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700';
  const { movieId } = useParams();
  const [movieDetails, setMovieDetails] = useState('');

  const location = useLocation();
  // console.log(location);

  const backLinkRef = useRef(location.state?.from ?? '/');

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

  // console.log(movieDetails);

  const { id, genres, title, vote_average, overview, poster_path } =
    movieDetails;
  const poster = `https://image.tmdb.org/t/p/w500${poster_path}`;

  // console.log(poster);
  const ganresList = genres?.map(genre => {
    return <li key={genre.id}>{genre.name}</li>;
  });

  return (
    <div className={css.movieContainer}>
      <Link to={backLinkRef.current} className={css.bntBack}>
        {' '}
        GoBack{' '}
      </Link>

      <div key={id} className={css.movieDetails}>
        <img src={poster_path === null ? defaultImg : poster} alt="Movie poster" className={css.moviePoster} />
        <div className={css.movieInfo}>
          <h2 className={css.movieTitle}>{title}</h2>
          <p className={css.movieText}>
            {' '}
            User Score: {vote_average?.toFixed(1)}%
          </p>

          <h3 className={css.movieOverview}>Overview</h3>
          <p className={css.movieText}>{overview}</p>

          <h2 className={css.movieGenres}>Genres</h2>
          <ul className={css.genresist}>{ganresList}</ul>
        </div>
      </div>

      <p className={css.movieAddInfo}>Additional infomation</p>
      <ul className={css.movieAddInfoLink}>
        <li>
          <NavLink
            to="cast" //оскільки є вкладений маршрут через зірочку * в app, то можна просто дописати кінцівку вкладеного маршруту.
            className={({ isActive }) =>
              `${css.navLink} ${isActive ? css.active : ''}`
            }
          >
            Cast
          </NavLink>
        </li>
        <li>
          <NavLink
            to="reviews" // мій перший спосіб який я зробив без зірочки, ефект такий самий
            className={({ isActive }) =>
              `${css.navLink} ${isActive ? css.active : ''}`
            }
          >
            Reviews
          </NavLink>
        </li>
      </ul>
      <Suspense> 
      <Routes>
        <Route path="cast" element={<Cast />} />
        <Route path="reviews" element={<Reviews />} />
      </Routes></Suspense>
      {/* тут можемо в шлях просто вказати так як ми вказували в навігації */}
    </div>
  );
};

export default MovieDetails;
