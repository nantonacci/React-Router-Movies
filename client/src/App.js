import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import SavedList from './Movies/SavedList';
import Movie from './Movies/Movie';
import MovieList from './Movies/MovieList';

const App = () => {
  const [savedList, setSavedList] = useState([]);

  const addToSavedList = movie => {
    setSavedList([...savedList, movie]);
  };

  return (
    <div>
      <SavedList list={savedList} />
      <Route exact path="/" component={MovieList} />
      {/* <Route render={props => <MovieList {...props} movie={movies} />} /> */}
      <Route exact path="/movies/:id" component={Movie} />
      {/* <Route render={props => <Movie {...props} movies={movie} />} /> */}
    </div>
  );
};

export default App;
