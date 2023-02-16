import React, { useEffect, useState } from 'react';
import { Outlet, useLocation, useNavigate, useParams } from 'react-router-dom';
import fetchService from '../services/movieFetchService';
import NavLinkComponent from '../helpers/NavLinkComponent';


function SingleMovie(props) {
  const location = useLocation();
  const { movieId } = useParams();
  const [film, setFilm] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchFilm = async () => {
      const film = await fetchService.fetchFilmById(movieId);
      setFilm(film);
    };
    fetchFilm().catch(err => console.log(err));
  }, [movieId]);

  const goBackButtonHandler = () => {
    navigate(location.state?.from ?? '/');
  };
  return (
    <div className='single-movie-container'>
      <button className='styled-button' onClick={goBackButtonHandler}>go back</button>
      <img src={
        film?.poster_path
          ? `https://image.tmdb.org/t/p/w500${film.poster_path}`
          : `https://skydomepictures.com/wp-content/uploads/2018/08/movie-poster-coming-soon-2.png`
      }
           alt={film?.title || film?.original_name || film?.original_title} />
      {film && <h2>{film?.title || film?.original_name || film?.original_title}</h2>}
      <div className='film-navigation-button-wrapper'>
        {<NavLinkComponent to={`/movies/${movieId}/cast`} from={location.state?.from ?? '/'}>Cast</NavLinkComponent>}
        {<NavLinkComponent to={`/movies/${movieId}/review`}
                           from={location.state?.from ?? '/'}>Review</NavLinkComponent>}
      </div>

      {<Outlet />}
    </div>
  );
}

export default SingleMovie;
