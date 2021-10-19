import React from 'react';
import Card from '../card/card';
import './list-cards.scss';

const ListCards = ({ posts }) => {
  const elements = posts.map((item) => {
    const { id } = item;
    return (
      <li key={id} className="list-item-cards">
        <Card
          imgSrc={item.imgSrc}
          imgAlt={item.imgAlt}
          title={item.title}
          descr={item.descr}
          like={item.like}
          views={item.views}
        />
      </li>
    );
  });

  return <ul className="list-card">{elements}</ul>;
};

export default ListCards;
