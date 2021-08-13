import React, { useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import queryString from 'query-string';
import NewsServise from '../../services/new-service';
import DetailCard from '../../components/DetailCard/DetailCard';
import Spinner from '../../components/Spinner/Spinner';

const Details = () => {
  const sort = useSelector((state) => state.sort.sort);
  const { search } = useLocation();
  const { id } = useParams();
  const { q } = queryString.parse(search);
  const [data, setDate] = useState({});
  const [loading, setLoading] = useState(true);

  const newsServise = new NewsServise();
  useEffect(() => {
    setLoading(true);
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
      })
      .catch((e) => console.error('Error: ', e))
      .finally(() => {
        setLoading(false);
      });
  }, []);

  const main = loading ? <Spinner /> : <DetailCard data={data} />;

  return (
    <div className="details-page">
      {!Object.keys(data).length && !loading ? <></> : main}
    </div>
  );
};

export default Details;
