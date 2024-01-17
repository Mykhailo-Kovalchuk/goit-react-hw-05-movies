import React from 'react';
import css from './searchMovie.module.css';


const SearchMovie = ({onSubmit}) => {
   const submitHandler = event => {
event.preventDefault()
    const inputValue = event.currentTarget.elements.searchInput.value;
    // console.log(inputValue);
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
          placeholder="Search movie"
          
        />
        <button type="submit" className={css.buttonSearch}>
          Search Movie
        </button>
      </form>
    </div>
  );
};

export default SearchMovie;
