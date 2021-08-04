import React from 'react';
import './sort.scss';

const Sort = () => {
  return (
    <div className="sort-wrapper">
      <button className="sort-btn" type="button">
        Relevancy
      </button>
      <button className="sort-btn" type="button">
        Popularity
      </button>
      <button className="sort-btn" type="button">
        Published at
      </button>
    </div>
  );
};

export default Sort;
