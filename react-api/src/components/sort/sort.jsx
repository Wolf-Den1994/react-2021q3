import React from 'react';
import './sort.scss';

const Sort = ({ onSortBy }) => {
  const onClickBtns = (event) => {
    if (event.key !== 'Enter') return;
    console.log(event);
    const { target } = event;
    onSortBy(target.id);
    target.classList.add('active');
  };

  return (
    <div
      className="sort-wrapper"
      onClick={onClickBtns}
      onKeyDown={onClickBtns}
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
