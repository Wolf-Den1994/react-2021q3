import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { changeSortAction } from '../../store/sortReducer';
import './Sort.scss';

const Sort = () => {
  const dispatch = useDispatch();

  const [activeBtn, setActiveBtn] = useState([false, true, false]);

  const changeSort = (event) => {
    const { target } = event;
    setActiveBtn((store) => {
      const copy = [...store];
      const falsesStore = copy.map(() => false);
      const newStore = falsesStore.map((elem, index) => {
        if (+target.classList[1] === index) {
          return true;
        }
        return elem;
      });
      return newStore;
    });
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
        className={`sort-btn 0 ${activeBtn[0] ? 'active' : ''}`}
        id="relevancy"
        type="button"
      >
        Relevancy
      </button>
      <button
        className={`sort-btn 1 ${activeBtn[1] ? 'active' : ''}`}
        id="popularity"
        type="button"
      >
        Popularity
      </button>
      <button
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
