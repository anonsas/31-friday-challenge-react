import React, { useState } from 'react';
import ArrowDown from '../assets/ArrowDown.svg';

function Joke({ setup, delivery, joke }) {
  const [isActive, setIsActive] = useState(false);

  const showAnswerHandler = () => {
    setIsActive((prevState) => !prevState);
  };

  return (
    <div className="joke">
      {!!joke ? (
        <div className="joke__question">
          <p className="joke__question--title">{joke}</p>
        </div>
      ) : (
        <div className="joke__question" onClick={showAnswerHandler}>
          <p className="joke__question--title">{setup}</p>
          <img src={ArrowDown} className="joke__question--arrow" alt="arrow-down" />
        </div>
      )}

      {isActive && (
        <div className="joke__answer">
          <p className="joke__answer--title">{delivery}</p>
        </div>
      )}
    </div>
  );
}

export default Joke;
