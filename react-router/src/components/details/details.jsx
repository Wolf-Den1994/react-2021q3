import React, { useEffect, useState } from 'react';
import NewsServise from '../../services/new-service';
import Card from '../card/card';
import './details.scss';

const Details = ({ match }) => {
  const [data, setDate] = useState({});

  const newsServise = new NewsServise();
  useEffect(() => {
    newsServise
      .getResourseById(match.q)
      .then((response) => {
        if (Object.prototype.hasOwnProperty.call(response, 'articles')) {
          const result = response.articles.find(
            (el, index) => +match.id - 1 === index,
          );
          const obj = {
            articles: [result],
          };
          setDate(obj);
        }
      })
      .catch((e) => console.error('Error: ', e));
  }, []);

  return (
    <div className="details-page">
      <h2>Details</h2>
      {!Object.keys(data).length ? <></> : <Card data={data} />}
    </div>
  );
};

export default Details;
