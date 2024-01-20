import React from 'react';
import css from './searchMovie.module.css';
import { useSearchParams } from 'react-router-dom';

const SearchMovie = ({ onSubmit }) => {

const [searchQuery, setSearchQuery] = useSearchParams();
const query = searchQuery.get('query');
// console.log(query);


  const submitHandler = event => {
    event.preventDefault();
    const inputValue = event.currentTarget.elements.searchInput.value;
    // console.log(inputValue);
setSearchQuery({query: inputValue})    ;
    onSubmit(inputValue.toLowerCase());
    
  };

  return (
    <div>
      <form className={css.form} onSubmit={submitHandler}>
        <input
          name="searchInput"
          type="text"
          className={css.inputSearch}
          required
          autoFocus
          placeholder="Movie title"
          defaultValue={query}
        />
        <button type="submit" className={css.buttonSearch}> 
          Search Movie
        </button>
      </form>
    </div>
  );
};

export default SearchMovie;
