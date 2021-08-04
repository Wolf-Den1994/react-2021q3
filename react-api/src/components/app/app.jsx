import React, { useEffect, useState } from 'react';
import NewsServise from '../../services/new-service';
import SearchBar from '../search-bar/search-bar';
import Card from '../card/card';
import Emtry from '../emtry/emtry';
import Sort from '../sort/sort';
import Pagination from '../pagination/pagination';

const App = () => {
  const newsServise = new NewsServise();

  const [sort, setSort] = useState('popularity');
  const [searchString, setSearchString] = useState('');
  const [data, setDate] = useState({});
  const [numberResult, setNumberResult] = useState(10);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState();

  useEffect(() => {
    newsServise
      .getResourse(searchString, sort, numberResult, page)
      .then((response) => {
        setDate(response);
        console.log(response)
        setTotalResults(response.totalResults);
      })
      .catch();
  }, [searchString, sort, numberResult, page]);

  return (
    <>
      <SearchBar onSearch={setSearchString} />
      {!Object.keys(data).length ? null : (
        <Sort sortBy={sort} onSortBy={setSort} />
      )}
      {!Object.keys(data).length ? <Emtry /> : <Card data={data} />}
      {!Object.keys(data).length ? null : (
        <Pagination
          num={numberResult}
          changeNum={setNumberResult}
          page={page}
          changePage={setPage}
          total={totalResults}
          changeTotal={setTotalResults}
        />
      )}
    </>
  );
};

export default App;
