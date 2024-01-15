import React from 'react'; //rafce
import css from './home.module.css';
import { useEffect, useState } from 'react';

import { fetchTrandingMovies } from 'services-functions/api-movies.js';

import Tranding from '../../components/Tranding/Tranding';

const Home = () => {
  const [trands, setTrands] = useState([]);

  useEffect(() => {
    const fetchTrandingData = async () => {
      const result = await fetchTrandingMovies();

      setTrands(result);
    };
    fetchTrandingData();
  }, []);

  return (
    <div>
      <h2>Tranding today</h2>
      <ul className={css.trandingList}>
        <Tranding trands={trands} />
      </ul>
    </div>
  );
};

export default Home;
