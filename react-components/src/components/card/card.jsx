import React from 'react';
import './card.scss';

const Card = (props) => {
  const {
    imgSrc, imgAlt, title, descr, like, views,
  } = props;

  return (
    <div className="card">
      <img src={imgSrc} alt={imgAlt} className="img" />
      <h3 className="title">{title}</h3>
      <p className="description">{descr}</p>
      <div className="statistic">
        <span className="like-span">
          <i className="like" />
          {like}
        </span>
        <span className="views-span">
          <i className="views" />
          {views}
        </span>
        <span className="favorite-span">
          <i className="favorite" />
        </span>
      </div>
    </div>
  );
};

export default Card;
