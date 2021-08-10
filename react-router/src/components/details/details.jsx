import React, { useEffect, useState } from 'react';
import NewsServise from '../../services/new-service';
import DetailCard from '../detail-card/detail-card';
import Spinner from '../spinner/spinner';

const Details = ({ sort, match }) => {
  const [data, setDate] = useState({});
  const [loading, setLoading] = useState(true);

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
        if (Object.keys(response).length) setLoading(false);
      })
      .catch((e) => console.error('Error: ', e));
  }, []);

  const main = loading ? <Spinner /> : <DetailCard data={data} />;

  return (
    <div className="details-page">
      {!Object.keys(data).length ? <></> : main}
    </div>
  );
};

export default Details;
