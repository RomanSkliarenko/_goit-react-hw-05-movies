import React, { useEffect, useState } from 'react';
import fetchService from '../services/movieFetchService';
import { nanoid } from 'nanoid';
import FilmListItem from '../components/FilmListItem';
import { useLocation, useSearchParams } from 'react-router-dom';
import Notiflix from 'notiflix'


function Movies() {
  const [searchQuery, setSearchQuery] = useState('');
  const [filmsByQuery, setFilmsByQuery] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const searchURLQuery = searchParams.get('searchQuery');
  const location = useLocation();

  const formSubmitHandler = (e) => {
    e.preventDefault();
    if (searchQuery === '') {
      Notiflix.Notify.warning('Enter film name');
    }
    setSearchParams({ searchQuery });
    fetchService.fetchFilmsByName(searchQuery).then(data => {
      setFilmsByQuery(data);
      if (data.length < 1){
        Notiflix.Notify.warning(`our service knows nothing about the movie with the title "${searchQuery}"`);

      }
    }).catch((err)=>{
      Notiflix.Notify.warning(`${err}`);

    });
  };
  const changeSearchQueryHandler = (e) => {
    setSearchQuery(e.target.value);
  };
  useEffect(() => {
    searchURLQuery && fetchService.fetchFilmsByName(searchURLQuery).then(data => {
      setFilmsByQuery(data);
    });
    setSearchQuery(searchURLQuery)
  }, [searchURLQuery]);


  return (
    <div>
      <form onSubmit={formSubmitHandler} className='search-form'>
        <input onChange={changeSearchQueryHandler} type='text' placeholder='What movie are we looking for?'
               value={searchQuery || ''} />
        <button type='submit' className='styled-button'>FIND</button>
      </form>
      <ul className='film-list'>
        {filmsByQuery && filmsByQuery.map((film) => <li key={nanoid()}>
          <FilmListItem film={film} from={location} />
        </li>)}
      </ul>
    </div>
  );
}

export default Movies;
