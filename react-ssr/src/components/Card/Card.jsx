import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import './Card.scss';

const Card = () => {
  const q = useSelector((state) => state.searchBar.searchString);
  const data = useSelector((state) => state.home.data);
  const { articles } = data;
  const arr = articles || [];
  const elements = arr.map((elem) => {
    const time = elem.publishedAt.split('T').join(' ').split(':');
    return (
      <NavLink
        to={`/details/${elem.id}?q=${q}`}
        className="card"
        id={elem.id}
        key={elem.id}
        style={{ textDecoration: 'none', color: '#000' }}
      >
        <img className="image" src={elem.urlToImage} alt={elem.title} />
        <div className="title">{elem.title}</div>
        <div className="description">{elem.description}</div>
        <div className="author">{elem.author}</div>
        <div className="published">
          {time[0]}:{time[1]}
        </div>
        <div className="source">
          <span>
            <b>Source: </b>
            {elem.source.name}
          </span>
        </div>
      </NavLink>
    );
  });
  return <div className="cards">{elements}</div>;
};

export default Card;
