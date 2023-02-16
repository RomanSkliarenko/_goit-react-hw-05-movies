import React from 'react';
import NavLinkComponent from '../helpers/NavLinkComponent';

function FilmListItem({film , from}) {
  return (
    <NavLinkComponent to={`/movies/${film.id}`} from={from}>
      {film.name || film.title || film.original_name || film.original_title}
    </NavLinkComponent>
  );
}

export default FilmListItem;
