import React, { useEffect, useState } from 'react';
import NewsServise from '../../services/new-service';
import SearchBar from '../search-bar/search-bar';
import Card from '../card/card';
import Sort from '../sort/sort';
import Pagination from '../pagination/pagination';
import Spinner from '../spinner/spinner';

const App = () => {
  const newsServise = new NewsServise();

  const [sort, setSort] = useState('popularity');
  const [searchString, setSearchString] = useState('');
  const [data, setDate] = useState({});
  const [numberResult, setNumberResult] = useState(10);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState();
  const [loading, setLoading] = useState(false);
  const [empty, setEmpty] = useState(false);

  useEffect(() => {
    newsServise
      .getResourse(searchString, sort, numberResult, page)
      .then((response) => {
        setDate(response);
        setTotalResults(response.totalResults);
        if (Object.keys(response).length) setLoading(false);
        if (Object.prototype.hasOwnProperty.call(response, 'articles')) {
          if (Object.keys(response.articles).length) {
            setEmpty(true);
          } else {
            setEmpty(false);
          }
        }
      })
      .catch();
  }, [searchString, sort, numberResult, page, loading, empty]);

  const main = loading ? <Spinner /> : <Card data={data} />;

  const emptySort = empty ? (
    <Sort sortBy={sort} onSortBy={setSort} />
  ) : (
    <p className="empty">
      No news for your request was found. Try another query.
    </p>
  );

  const emptyPagination = empty ? (
    <Pagination
      num={numberResult}
      changeNum={setNumberResult}
      page={page}
      changePage={setPage}
      total={totalResults}
    />
  ) : (
    <></>
  );

  return (
    <>
      <SearchBar onSearch={setSearchString} onLoading={setLoading} />
      {!Object.keys(data).length && !empty ? <></> : emptySort}
      {!Object.keys(data).length && !Object.keys(data).length && !loading ? (
        <></>
      ) : (
        main
      )}
      {!Object.keys(data).length && !empty ? <></> : emptyPagination}
    </>
  );
};

export default App;
