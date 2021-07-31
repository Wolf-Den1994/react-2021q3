import React from 'react';
import './checkbox.scss';

const Checkbox = ({
  value, display, classNameLabel, classNameSpan,
}) => (
  <>
    <label htmlFor={value} className={classNameLabel}>
      <span className="display">{display}</span>
      <input type="checkbox" id={value} name={value} />
      <span className={classNameSpan} />
    </label>
  </>
);

export default Checkbox;
