import React from 'react';
import './card.scss';

const Card = ({ data }) => {
  const { articles } = data;
  const elements = articles.map((elem) => {
    const time = elem.publishedAt.split('T').join(' ').split(':');
    return (
      <div className="card" key={elem.url}>
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
          <a className="link" href={elem.url} target="_blank" rel="noreferrer">
            Link
          </a>
        </div>
      </div>
    );
  });
  return <div className="cards">{elements}</div>;
};

export default Card;