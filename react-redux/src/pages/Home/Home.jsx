import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import NewsServise from '../../services/new-service';
import Card from '../../components/Card/Card';
import Sort from '../../components/Sort/Sort';
import Pagination from '../../components/Pagination/Pagination';
import Spinner from '../../components/Spinner/Spinner';
import SearchBar from '../../components/SearchBar/SearchBar';
import { changeDataAction } from '../../store/dataReducer';
import { changeTotalResultsAction } from '../../store/totalResultReducer';
import { changeLoadingAction } from '../../store/loadingReducer';
import { changeEmptyAction } from '../../store/emptyReducer';

const Home = () => {
  const newsServise = new NewsServise();
  const dispatch = useDispatch();
  const sort = useSelector((state) => state.sort.sort);
  const searchString = useSelector((state) => state.searchString.searchString);
  const numberResult = useSelector((state) => state.numberResult.numberResult);
  const page = useSelector((state) => state.page.page);
  const data = useSelector((state) => state.data.data);
  const loading = useSelector((state) => state.loading.loading);
  const empty = useSelector((state) => state.empty.empty);

  useEffect(() => {
    newsServise
      .getResourse(searchString, sort, numberResult, page)
      .then((response) => {
        if (Object.prototype.hasOwnProperty.call(response, 'articles')) {
          const addId = response.articles.map((el, index) => {
            return { ...el, id: index + numberResult * (page - 1) };
          });
          const objData = {
            articles: addId,
          };
          dispatch(changeDataAction(objData));
        }
        dispatch(changeTotalResultsAction(response.totalResults));
        if (Object.keys(response).length) dispatch(changeLoadingAction(false));
        if (Object.prototype.hasOwnProperty.call(response, 'articles')) {
          if (Object.keys(response.articles).length) {
            dispatch(changeEmptyAction(true));
          } else {
            dispatch(changeEmptyAction(false));
          }
        }
      })
      .catch((e) => console.error('Error: ', e));
  }, [searchString, sort, numberResult, page, loading, empty]);

  const main = loading ? <Spinner /> : <Card q={searchString} />;

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
