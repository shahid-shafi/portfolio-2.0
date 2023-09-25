import React from 'react';
import './index.scss';

interface Props {
  letterClass: string;
  strArray: string[];
  index: number;
}

const AnimatedLetters: React.FC<Props> = ({ letterClass, strArray, index }) => {
  return (
    <span>
      {strArray?.map((char, i) => (
        <span key={char + i} className={`${letterClass} _${i + index}`}>
          {char}
        </span>
      ))}
    </span>
  );
};

export default AnimatedLetters;
