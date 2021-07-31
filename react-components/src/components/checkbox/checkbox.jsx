import React from 'react';
import './checkbox.scss';

const Checkbox = ({
  value, display, classNameLabel, classNameSpan, onChangeHandler,
}) => (
  <>
    <label htmlFor={value} className={classNameLabel}>
      <span className="display">{display}</span>
      <input type="checkbox" id={value} name={value} onChange={onChangeHandler} />
      <span className={classNameSpan} />
    </label>
  </>
);

export default Checkbox;
