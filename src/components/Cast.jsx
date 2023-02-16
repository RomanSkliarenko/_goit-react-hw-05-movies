import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import fetchService from '../services/movieFetchService';
import { nanoid } from 'nanoid';
import img from '../feed/profileImage'

function Cast() {
  const { movieId } = useParams();
  const [filmCast, setFilmCast] = useState(null);

  useEffect(() => {
    const fetchFilmCast = async () => {
      const cast = await fetchService.fetchFilmCast(movieId);
      setFilmCast(cast);
    };
    fetchFilmCast().catch(err => console.log(err));
  }, [movieId]);

  return (
    <div className='cast-container'>
      {filmCast && filmCast.map((actor) => {
        return (
          <div key={nanoid()} className='actor'>
            <img src={ actor.profile_path ?`https://image.tmdb.org/t/p/w500${actor.profile_path}`: img } alt={actor.name} />
            <h5>{actor.name}</h5>
            <p>{actor.character || "Actor"}</p>
          </div>
        );
      })}
    </div>
  );
}

export default Cast;
