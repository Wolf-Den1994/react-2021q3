import React, { useState } from 'react';
import NewsServise from '../../services/new-service';
import SearchBar from '../search-bar/search-bar';

const App = () => {
  const newsServise = new NewsServise();

  const [sort, setSort] = useState('popularity');
  const [searchString, setSearchString] = useState('');

  newsServise.getResourse(searchString, sort).then((res) => console.log(res));

  return (
    <>
      <SearchBar onSearch={setSearchString} />
    </>
  );
};

export default App;
