import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  changeSortAction,
  changeActiveBtnSortAction,
} from '../../store/controlReducer';
import './Sort.scss';

const Sort = () => {
  const dispatch = useDispatch();
  const activeBtn = useSelector((state) => state.control.activeBtnSort);

  const changeSort = (event) => {
    const { target } = event;
    const setActiveBtn = (store) => {
      const copy = [...store];
      const falsesStore = copy.map(() => false);
      const newStore = falsesStore.map((elem, index) => {
        if (+target.classList[1] === index) {
          return true;
        }
        return elem;
      });
      return newStore;
    };
    dispatch(changeActiveBtnSortAction(setActiveBtn(activeBtn)));
    dispatch(changeSortAction(target.id));
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
      <button
        data-testid="relevancy"
        className={`sort-btn 0 ${activeBtn[0] ? 'active' : ''}`}
        id="relevancy"
        type="button"
      >
        Relevancy
      </button>
      <button
        data-testid="popularity"
        className={`sort-btn 1 ${activeBtn[1] ? 'active' : ''}`}
        id="popularity"
        type="button"
      >
        Popularity
      </button>
      <button
        data-testid="publishedAt"
        className={`sort-btn 2 ${activeBtn[2] ? 'active' : ''}`}
        id="publishedAt"
        type="button"
      >
        Published at
      </button>
    </div>
  );
};

export default Sort;
