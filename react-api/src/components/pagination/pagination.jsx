import React from 'react';
import './pagination.scss';

const Pagination = ({ num, changeNum, page, changePage, total, setTotal }) => {
  const options = [];
  for (let i = 1; i < Math.floor(total / 10); i++) {
    options.push(<option key={i}>{i}</option>);
  }

  const onSelectHandler = (event) => {
    changePage(event.target.value)
  }

  return (
    <div className="pagination-wrapper">
      <button className="pagination-btn left" type="button">
        &#8592;
      </button>
      <select className="pagination-select" onChange={onSelectHandler}>{options}</select>
      <button className="pagination-btn right" type="button">
        &#8594;
      </button>
    </div>
  );
};

export default Pagination;
