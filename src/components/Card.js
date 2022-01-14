import React from 'react';
import { card, cardTitle } from './Card.module.scss';

const Card = ({ title, icon, theme = 'theme-red', children }) => {
  return (
    <article className={`${card} ${theme}`}>
      <header>
        <h3 className={cardTitle}>{title}</h3>
      </header>
      {children}
      <footer>
        <img src={`/icons/${icon}.svg`} alt={`${icon}`} />
      </footer>
    </article>
  );
};

export default Card;
