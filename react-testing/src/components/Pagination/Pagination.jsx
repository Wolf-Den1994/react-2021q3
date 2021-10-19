import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  changePageAction,
  changeNumberResultAction,
  changeDisabledBtnAction,
} from '../../store/controlReducer';
import './Pagination.scss';

export const getPages = (numberPage) => {
  const optionsPage = [];
  for (let i = 1; i < numberPage + 1; i++) {
    optionsPage.push(<option key={i}>{i}</option>);
  }
  return optionsPage;
};

export const getNumberResultPerPage = (total, maxRequestFromServer) => {
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
  return numberResultPerPage;
};

const Pagination = () => {
  const page = useSelector((state) => state.control.page);
  const num = useSelector((state) => state.control.numberResult);
  const total = useSelector((state) => state.home.totalResults);
  const btn = useSelector((state) => state.control.disabledBtn);
  const dispatch = useDispatch();
  const maxRequestFromServer = 100;
  const maxTotal = total > maxRequestFromServer ? maxRequestFromServer : total;
  const numberPage = Math.floor(maxTotal / num);

  const dividers = [10, 5, 2, 1];
  const optionsNumResult = [];

  for (
    let i = 1;
    i < getNumberResultPerPage(total, maxRequestFromServer);
    i++
  ) {
    optionsNumResult.push(
      <option key={i}>{maxRequestFromServer / dividers[i - 1]} / page</option>,
    );
  }

  const onSelectPageHandler = (event) => {
    dispatch(changePageAction(+event.target.value));
  };

  const onGoPrevPage = (event) => {
    const prevPage = () => {
      if (+page !== 1) {
        const newPage = +page - 1;
        const falseBtn = (storeBtn) => {
          const copy = [...storeBtn];
          const newStoreBtn = copy.map(() => false);
          return newStoreBtn;
        };
        dispatch(changeDisabledBtnAction(falseBtn(btn)));
        if (+page === 1 + 1) {
          const onBtn = (storeBtn) => {
            const copy = [...storeBtn];
            const id = event.target.id.replace(/[^\d]/g, '');
            const newStoreBtn = copy.map((elem, index) => {
              if (index === +id) {
                return true;
              }
              return false;
            });
            return newStoreBtn;
          };
          dispatch(changeDisabledBtnAction(onBtn(btn)));
        }
        return newPage;
      }
      return page;
    };
    dispatch(changePageAction(prevPage()));
  };

  const onGoNextPage = (event) => {
    const nextPage = () => {
      if (+page !== numberPage) {
        const newPage = +page + 1;
        const falseBtn = (storeBtn) => {
          const copy = [...storeBtn];
          const newStoreBtn = copy.map(() => false);
          return newStoreBtn;
        };
        dispatch(changeDisabledBtnAction(falseBtn(btn)));
        if (+page === numberPage - 1) {
          const onBtn = (storeBtn) => {
            const copy = [...storeBtn];
            const id = event.target.id.replace(/[^\d]/g, '');
            const newStoreBtn = copy.map((elem, index) => {
              if (index === +id) {
                return true;
              }
              return false;
            });
            return newStoreBtn;
          };
          dispatch(changeDisabledBtnAction(onBtn(btn)));
        }
        return newPage;
      }
      return page;
    };
    dispatch(changePageAction(nextPage()));
  };

  const onSelectNumResultHandler = (event) => {
    const numCardsOnPage = +event.target.value.replace(/[^\d]/g, '');
    if (page * numCardsOnPage - 1 < maxRequestFromServer) {
      dispatch(changeNumberResultAction(numCardsOnPage));
    } else {
      dispatch(
        changePageAction(Math.floor(maxRequestFromServer / numCardsOnPage)),
      );
      dispatch(changeNumberResultAction(numCardsOnPage));
    }
  };

  return (
    <div className="pagination-wrapper">
      <button
        className="pagination-btn left"
        type="button"
        onClick={onGoPrevPage}
        disabled={btn[0]}
        id="btn0"
      >
        &#8592;
      </button>
      <select
        className="pagination-select"
        onChange={onSelectPageHandler}
        value={page}
      >
        {getPages(numberPage)}
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
        disabled={btn[1]}
        id="btn1"
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
