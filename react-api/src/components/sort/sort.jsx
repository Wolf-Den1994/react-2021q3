import React from 'react';
import './sort.scss';

const Sort = ({ onSortBy }) => {
  const changeSort = (event) => {
    const { target } = event;
    onSortBy(target.id);
    target.classList.add('active');
  };

  const onClickBtns = (event) => changeSort(event);
  const onKeyClickBtns = (event) => {
    if (event.key !== 'Enter') return;
    changeSort(event);
  };

  return (
    <div
      className="sort-wrapper"
      onClick={onClickBtns}
      onKeyDown={onKeyClickBtns}
      role="presentation"
    >
      <button className="sort-btn" id="relevancy" type="button">
        Relevancy
      </button>
      <button className="sort-btn" id="popularity" type="button">
        Popularity
      </button>
      <button className="sort-btn" id="publishedAt" type="button">
        Published at
      </button>
    </div>
  );
};

export default Sort;
