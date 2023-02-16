import React, { useEffect, useState } from 'react';
import { nanoid } from 'nanoid';
import { useParams } from 'react-router-dom';
import fetchService from '../services/movieFetchService';

function Review() {
  const { movieId } = useParams();
  const [filmReview, setFilmReview] = useState(null);

  useEffect(() => {
    const fetchFilmReview = async () => {
      const review = await fetchService.fetchFilmReview(movieId);
      setFilmReview(review);
    };
    fetchFilmReview().catch(err => console.log(err));
  }, [movieId]);
  return (
    <div className='review-container'>
      {filmReview && filmReview.map((review) =>
        <div className='review' key={nanoid()}>
          <h3>{review.author}</h3>
          <p>{review.content}</p>
          <a href={review.url}>Read More</a>
        </div>)}
      {filmReview && filmReview.length < 1 && <p>We don`t have any reviews for this movie yet</p>}
    </div>
  );
}

export default Review;
