import React from 'react';
import { useSelector } from 'react-redux';
import './DetailCard.scss';

const DetailCard = () => {
  const data = useSelector((state) => state.details.data);
  const { articles } = data;
  const arr = articles || [];
  const element = arr.map((elem) => {
    const time = elem.publishedAt.split('T').join(' ').split(':');
    return (
      <div className="detail-card" key={elem.url}>
        <h3 className="title">{elem.title}</h3>
        <img className="image" src={elem.urlToImage} alt={elem.title} />
        <div className="description">
          {elem.description}
          <a href={elem.url} rel="noreferrer" target="_blank" className="link">
            [...Learn more]
          </a>
        </div>
        <div className="author">
          <b>Author:</b> {elem.author}
        </div>
        <div className="source">
          <span>
            <b>Source: </b>
            {elem.source.name}
          </span>
          <span className="published">
            {time[0]}:{time[1]}
          </span>
        </div>
      </div>
    );
  });
  return <div className="detail-card-wrapper">{element}</div>;
};

export default DetailCard;
