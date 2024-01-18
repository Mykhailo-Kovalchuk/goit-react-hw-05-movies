import React from 'react';
import { useParams } from 'react-router-dom';
import { fetchReviews } from '../../services-functions/api-movies';
import { useEffect, useState } from 'react';

const Reviews = () => {
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
        <li key={id}>
          <img src={photo} alt="Author" />
          <h4>{author}</h4>
          <p>{content}</p>
        </li>
      );
    }
  );

  return (
    <div>
      Reviews
      {reviews}
    </div>
  );
};

export default Reviews;
