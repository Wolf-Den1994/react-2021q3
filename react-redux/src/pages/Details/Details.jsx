import React, { useEffect } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import queryString from 'query-string';
import NewsServise from '../../services/new-service';
import DetailCard from '../../components/DetailCard/DetailCard';
import Spinner from '../../components/Spinner/Spinner';
import {
  changeDetailsDataAction,
  changeLoadingDetailsAction,
} from '../../store/detailsReducer';

const Details = () => {
  const dispatch = useDispatch();
  const sort = useSelector((state) => state.sort.sort);
  const data = useSelector((state) => state.details.data);
  const loading = useSelector((state) => state.details.loading);
  const { search } = useLocation();
  const { id } = useParams();
  const { q } = queryString.parse(search);

  const newsServise = new NewsServise();
  useEffect(() => {
    dispatch(changeLoadingDetailsAction(true));
    newsServise
      .getResourseById(q, sort)
      .then((response) => {
        if (Object.prototype.hasOwnProperty.call(response, 'articles')) {
          const result = response.articles.find((el, index) => +id === index);
          const obj = {
            articles: [result],
          };
          dispatch(changeDetailsDataAction(obj));
        }
      })
      .catch((e) => console.error('Error: ', e))
      .finally(() => {
        dispatch(changeLoadingDetailsAction(false));
      });
  }, []);

  const main = loading ? <Spinner /> : <DetailCard />;

  return (
    <div className="details-page">
      {!Object.keys(data).length && !loading ? <></> : main}
    </div>
  );
};

export default Details;
