import { NavLink, Routes, Route, Navigate } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import css from './app.module.css';

// import Home from '../pages/Home/Home.jsx';
// import Movies from '../pages/Movies/Movies.jsx';
// import MovieDetails from './MovieDetails/MovieDetails.jsx';

const Home = lazy(() => import('../pages/Home/Home.jsx'));
const Movies = lazy(() => import('../pages/Movies/Movies.jsx'));
const MovieDetails = lazy(() => import('./MovieDetails/MovieDetails.jsx'));

// маршрутизація:
// 1) зміна адресного рядку.
// 2) підготувати маршрути з відповідними шляхами та компонентами

export const App = () => {
  return (
    <div
      style={{
        // height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      <header className={css.header}>
        <NavLink
          to="/"
          className={({ isActive }) =>
            `${css.navLink} ${isActive ? css.active : ''}`
          }
        >
          Home
        </NavLink>

        <NavLink
          to="/movies"
          className={({ isActive }) =>
            `${css.navLink} ${isActive ? css.active : ''}`
          }
        >
          Movies
        </NavLink>
      </header>

      <main>
        
        <Suspense fallback>  
        {/* в разі потреби у властивість модна передати якийст лоадер, щоб він відображався під час завантаження компоненту, типу fallback={<Loader />} */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/movies/*" element={<Movies />} />

            <Route path="/movies/:movieId/*" element={<MovieDetails />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </Suspense>
      </main>
    </div>
  );
};
