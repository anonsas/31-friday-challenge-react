import React from 'react';
import './Jokes.scss';

import useFetch from '../../hooks/useFetch';
import Loader from '../../helpers/Loader/Loader';
import Joke from './Joke';

function Jokes() {
  const baseUrl = `https://v2.jokeapi.dev/joke/Programming?amount=10`;
  const { loading, data, error } = useFetch(baseUrl);

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return (
      <div className="error-message">
        <h3>Something went wrong: {error}</h3>
        <h4>Try to reload the page</h4>
      </div>
    );
  }

  return (
    <div className="jokes">
      <h2 className="jokes__title">joke-on-you</h2>
      <div className="jokes__list">
        {data?.map((joke) => (
          <Joke
            key={joke.id}
            setup={joke.setup}
            delivery={joke.delivery}
            joke={joke.joke}
          />
        ))}
      </div>
    </div>
  );
}

export default Jokes;
