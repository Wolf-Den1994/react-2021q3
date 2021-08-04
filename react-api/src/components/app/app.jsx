import React, { useEffect, useState } from 'react';
import NewsServise from '../../services/new-service';
import SearchBar from '../search-bar/search-bar';
import Card from '../card/card';
import Emtry from '../entry/emtry';
import Sort from '../sort/sort';

const App = () => {
  const newsServise = new NewsServise();

  const [sort, setSort] = useState('popularity');
  const [searchString, setSearchString] = useState('');
  const [data, setDate] = useState({});

  useEffect(() => {
    newsServise
      .getResourse(searchString, sort)
      .then((response) => {
        setDate(response);
      })
      .catch();
  }, [searchString]);

  return (
    <>
      <SearchBar onSearch={setSearchString} />
      {!Object.keys(data).length ? null : (
        <Sort sortBy={sort} onSortBy={setSort} />
      )}
      {!Object.keys(data).length ? <Emtry /> : <Card data={data} />}
    </>
  );
};

export default App;
