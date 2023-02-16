import React, { useEffect, useState } from 'react';
import fetchService from '../services/movieFetchService';
import { nanoid } from 'nanoid';
import { useLocation } from 'react-router-dom';
import FilmListItem from '../components/FilmListItem';

function Home() {
  const location = useLocation();
  const [trendingFilms, setTrendingFilms] = useState(null);

  useEffect(() => {
    const fetchFilms = async () => {
      const films = await fetchService.fetchTrendingFilms();
      setTrendingFilms(films);
    };
    fetchFilms().catch((err) => console.log(err));
  }, []);

  return (
    <ul className='film-list'>
      {trendingFilms && trendingFilms.map((film) => {
        return (
          <li key={nanoid()}>
            <FilmListItem film={film} from={location} />
          </li>
        );
      })}
    </ul>
  );
}

export default Home;
