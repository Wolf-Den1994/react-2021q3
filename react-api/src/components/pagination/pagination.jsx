import React from 'react';
import './pagination.scss';

const Pagination = ({ num, changeNum, page, changePage, total }) => {
  const maxRequestFromServer = 100;
  const optionsPage = [];
  const maxTotal = total > maxRequestFromServer ? maxRequestFromServer : total;
  const numberPage = Math.floor(maxTotal / num);
  for (let i = 1; i < numberPage + 1; i++) {
    optionsPage.push(<option key={i}>{i}</option>);
  }

  const dividers = [10, 5, 2, 1];
  const optionsNumResult = [];
  let numberResultPerPage;
  switch (true) {
    case total > maxRequestFromServer:
      numberResultPerPage = 5;
      break;
    case total > maxRequestFromServer / 2:
      numberResultPerPage = 4;
      break;
    case total > maxRequestFromServer / 5:
      numberResultPerPage = 3;
      break;
    default:
      numberResultPerPage = 2;
      break;
  }

  for (let i = 1; i < numberResultPerPage; i++) {
    optionsNumResult.push(
      <option key={i}>{maxRequestFromServer / dividers[i - 1]} / page</option>,
    );
  }

  const onSelectPageHandler = (event) => {
    changePage(event.target.value);
  };

  const onGoPrevPage = (event) => {
    changePage((store) => {
      if (+store !== 1) {
        const newStore = +store - 1;
        if (+store === 1 + 1) {
          event.target.disabled = true;
        }
        return newStore;
      }
      return store;
    });
  };

  const onGoNextPage = (event) => {
    changePage((store) => {
      if (+store !== numberPage) {
        const newStore = +store + 1;
        if (+store === numberPage - 1) {
          event.target.disabled = true;
        }
        return newStore;
      }
      return store;
    });
  };

  const onSelectNumResultHandler = (event) => {
    const numCardsOnPage = +event.target.value.replace(/[^\d]/g, '');
    if (page * numCardsOnPage - 1 < maxRequestFromServer) {
      changeNum(numCardsOnPage);
    } else {
      changePage(Math.floor(maxRequestFromServer / numCardsOnPage));
      changeNum(numCardsOnPage);
    }
  };

  return (
    <div className="pagination-wrapper">
      <button
        className="pagination-btn left"
        type="button"
        onClick={onGoPrevPage}
      >
        &#8592;
      </button>
      <select
        className="pagination-select"
        onChange={onSelectPageHandler}
        value={page}
      >
        {optionsPage}
      </select>
      <select
        className="pagination-select result-pages"
        onChange={onSelectNumResultHandler}
      >
        {optionsNumResult}
      </select>
      <button
        className="pagination-btn right"
        type="button"
        onClick={onGoNextPage}
      >
        &#8594;
      </button>
      <div className="pagination-total">
        <p>Total number of pages {numberPage}</p>
      </div>
    </div>
  );
};

export default Pagination;
