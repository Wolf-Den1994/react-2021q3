import React from 'react';
import './checkbox.scss';

const Checkbox = ({
  value,
  display,
  classNameLabel,
  classNameSpan,
  onChangeHandler,
  error,
}) => (
  <>
    <label htmlFor={value} className={classNameLabel}>
      <span className="display">
        {value === 'treatment' ? (
          <span>
            <span>{display}</span>
            <span>
              {!error && <span className="error">* need your consent</span>}
            </span>
          </span>
        ) : (
          display
        )}
      </span>
      <input
        type="checkbox"
        id={value}
        name={value}
        onChange={onChangeHandler}
      />
      <span className={classNameSpan} />
    </label>
  </>
);

export default Checkbox;
