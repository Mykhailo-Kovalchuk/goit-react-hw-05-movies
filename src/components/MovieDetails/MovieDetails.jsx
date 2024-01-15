import React from 'react';
import Cast from '../Cast/Cast';
import Review from '../Reviews/Reviews';

//тут зробити лішку в яку будуть приходити жанри, потім проганяти їх через map і повертати розмітку li і вставляти її в розмітку Ul нижче
const MovieDetails = ({ userQuery }) => {

const queryArray = userQuery?.map(movie => {

  return (
<li key={movie.id}>
<div>
          <img src="" alt="" />
          <div>
            <h2>Movie Title</h2>
            <p> User Score: %</p>

            <h3>Overview</h3>
            <p>Movie plot {movie.overview}</p>

            <h2>Genres</h2>
            <ul>genersList</ul>
          </div>
        </div>

        <p>Additional infomation</p>
        <ul>cast and reviews (через li зробити) </ul>

        <Cast />
        <Review />



</li>

  )

})


  return (
 <>  MoviePage
 
 {queryArray}
 </>

     
  );
};

export default MovieDetails;
