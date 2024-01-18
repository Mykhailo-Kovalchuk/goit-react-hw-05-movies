import { NavLink, Routes, Route, Navigate } from 'react-router-dom';

import Home from '../pages/Home/Home.jsx';
import Movies from '../pages/Movies/Movies.jsx';
import MovieDetails from './MovieDetails/MovieDetails.jsx';
// import SearchMovie from './SearchMovie/SearchMovie.jsx'

import css from './app.module.css';
// import { useEffect, useState } from 'react';
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
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies/*" element={<Movies />} />

          <Route path="/movies/:movieId/*" element={<MovieDetails />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </main>
    </div>
  );
};
