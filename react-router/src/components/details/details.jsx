import React, { useEffect, useState } from 'react';
import NewsServise from '../../services/new-service';
import DetailCard from '../detail-card/detail-card';

const Details = ({ sort, match }) => {
  const [data, setDate] = useState({});

  const newsServise = new NewsServise();
  useEffect(() => {
    newsServise
      .getResourseById(match.q, sort)
      .then((response) => {
        if (Object.prototype.hasOwnProperty.call(response, 'articles')) {
          const result = response.articles.find(
            (el, index) => +match.id === index,
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
      {!Object.keys(data).length ? <></> : <DetailCard data={data} />}
    </div>
  );
};

export default Details;
