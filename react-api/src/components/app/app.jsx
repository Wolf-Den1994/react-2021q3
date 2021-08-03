import React, { useEffect, useState } from 'react';
import NewsServise from '../../services/new-service';
import SearchBar from '../search-bar/search-bar';
import Card from '../card/card';

const App = () => {
  const newsServise = new NewsServise();

  const [sort, setSort] = useState('popularity');
  const [searchString, setSearchString] = useState('');
  const [data, setDate] = useState({});

  useEffect(() => {
    newsServise.getResourse(searchString, sort).then((response) => {
      console.log(response);
      setDate(response);
    });
  }, [searchString]);

  return (
    <>
      <SearchBar onSearch={setSearchString} />
      <Card data={data} />
    </>
  );
};

export default App;
