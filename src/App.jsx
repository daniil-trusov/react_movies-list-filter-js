import './App.scss';
import { useState } from 'react';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

function prepareMoviesData(movies, query) {
  const filterQuery = query.toLowerCase().trim();

  return movies.filter(movie => {
    return (
      movie.title.toLowerCase().includes(filterQuery) ||
      movie.description.toLowerCase().includes(filterQuery)
    );
  });
}

export const App = () => {
  const [filterQuery, setFilterQuery] = useState('');
  const visibleMovies = prepareMoviesData(moviesFromServer, filterQuery);

  return (
    <div className="page">
      <div className="page-content">
        <div className="box">
          <div className="field">
            {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
            <label htmlFor="search-query" className="label">
              Search movie
            </label>

            <div className="control">
              <input
                value={filterQuery}
                type="text"
                id="search-query"
                className="input"
                placeholder="Type search word"
                onChange={event => setFilterQuery(event.target.value)}
              />
            </div>
          </div>
        </div>

        <MoviesList movies={visibleMovies} />
      </div>

      <div className="sidebar">Sidebar goes here</div>
    </div>
  );
};
