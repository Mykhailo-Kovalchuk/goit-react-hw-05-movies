import React from 'react';
import css from './tranding.module.css';
import {Link} from 'react-router-dom';

const Tranding = ({ trands }) => {
  const trandingArray = trands?.map(movie => {
    return (
      <li key={movie.id} className={css.trand}>
        <Link to={`/movies/${movie.id}`}>
        {movie.title}
        </Link>
      </li>
    );
  });

  return (
    // <div className={css.tranding}>
    <>{trandingArray}</>
    // </div>
  );
};

export default Tranding;
