import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Card from '../../components/Card/Card';
import Sort from '../../components/Sort/Sort';
import Pagination from '../../components/Pagination/Pagination';
import Spinner from '../../components/Spinner/Spinner';
import SearchBar from '../../components/SearchBar/SearchBar';
import { fetchDataForHome } from '../../store/homeReducer';

const Home = () => {
  const dispatch = useDispatch();
  const sort = useSelector((state) => state.control.sort);
  const searchString = useSelector((state) => state.searchBar.searchString);
  const numberResult = useSelector((state) => state.control.numberResult);
  const page = useSelector((state) => state.control.page);
  const data = useSelector((state) => state.home.data);
  const loading = useSelector((state) => state.home.loading);
  const empty = useSelector((state) => state.home.empty);

  useEffect(() => {
    dispatch(fetchDataForHome(searchString, sort, numberResult, page));
  }, [searchString, sort, numberResult, page, loading, empty]);

  const main = loading ? <Spinner /> : <Card />;

  const emptySort = empty ? (
    <Sort />
  ) : (
    <p className="empty">
      No news for your request was found. Try another query.
    </p>
  );

  const emptyPagination = empty ? <Pagination /> : <></>;
  return (
    <>
      <SearchBar />
      {!Object.keys(data).length && !empty ? <></> : emptySort}
      {!Object.keys(data).length && !loading ? <></> : main}
      {!Object.keys(data).length && !empty ? <></> : emptyPagination}
    </>
  );
};

export default Home;
