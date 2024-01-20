import React from 'react';
import { useParams } from 'react-router-dom';
import { fetchReviews } from '../../services-functions/api-movies';
import { useEffect, useState } from 'react';
import css from './reviews.module.css'

const Reviews = () => {
  const defaultImg = 'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700';
  const { movieId } = useParams();
  // console.log(movieId);

  const [reviewsDetails, setReviewsDetails] = useState([]);

  useEffect(() => {
    const details = async () => {
      const responseFetch = await fetchReviews(movieId);
      // console.log(responseFetch);
      setReviewsDetails(responseFetch);
    };

    details();
  }, [movieId]);
  console.log();

  const reviews = reviewsDetails?.map(
    ({ id, content, author, author_details: { avatar_path } }) => {
      const photo = `https://image.tmdb.org/t/p/w300${avatar_path}`;

      return (
        <li key={id} className={css.reviewsList}>
          <img src={avatar_path === null ? defaultImg : photo} alt="No_Author_Photo" className={css.reviewsImage}/>
          <h4 className={css.reviewsAuthor}>{author}</h4>
          <p className={css.reviewsText}>{content}</p>
        </li>
      );
    }
  );

  return (
    <div className={css.reviewsContainer}>
      {reviews}
    </div>
  );
};

export default Reviews;
