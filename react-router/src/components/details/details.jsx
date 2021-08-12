import React, { useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import queryString from 'query-string';
import NewsServise from '../../services/new-service';
import DetailCard from '../detail-card/detail-card';
import Spinner from '../spinner/spinner';

const Details = ({ sort }) => {
  const { search } = useLocation();
  const { id } = useParams();
  const { q } = queryString.parse(search);
  const [data, setDate] = useState({});
  const [loading, setLoading] = useState(true);

  const newsServise = new NewsServise();
  useEffect(() => {
    newsServise
      .getResourseById(q, sort)
      .then((response) => {
        if (Object.prototype.hasOwnProperty.call(response, 'articles')) {
          const result = response.articles.find((el, index) => +id === index);
          const obj = {
            articles: [result],
          };
          setDate(obj);
        }
        if (Object.keys(response).length) setLoading(false);
      })
      .catch((e) => console.error('Error: ', e));
    return () => {
      setDate({});
      setLoading(true);
    };
  }, []);

  const main = loading ? <Spinner /> : <DetailCard data={data} />;

  return (
    <div className="details-page">
      {!Object.keys(data).length ? <></> : main}
    </div>
  );
};

export default Details;
