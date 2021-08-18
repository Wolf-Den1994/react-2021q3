import React, { useEffect } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import queryString from 'query-string';
import DetailCard from '../../components/DetailCard/DetailCard';
import Spinner from '../../components/Spinner/Spinner';
import { fetchDataForDetails } from '../../store/detailsReducer';

const Details = () => {
  const dispatch = useDispatch();
  const sort = useSelector((state) => state.control.sort);
  const data = useSelector((state) => state.details.data);
  const loading = useSelector((state) => state.details.loading);
  const { search } = useLocation();
  const { id } = useParams();
  const { q } = queryString.parse(search);

  useEffect(() => {
    dispatch(fetchDataForDetails(q, sort, id));
  }, []);

  const main = loading ? <Spinner /> : <DetailCard />;

  return (
    <div className="details-page">
      {!Object.keys(data).length && !loading ? <></> : main}
    </div>
  );
};

export default Details;
