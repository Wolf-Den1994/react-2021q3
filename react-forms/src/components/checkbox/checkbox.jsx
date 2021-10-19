import React from 'react';
import './checkbox.scss';

const Checkbox = ({
  name,
  display,
  classNameLabel,
  classNameSpan,
  onChangeHandler,
  error,
  value,
}) => (
  <>
    <label htmlFor={name} className={classNameLabel}>
      <span className="display">
        {name === 'treatment' ? (
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
        id={name}
        name={name}
        onChange={onChangeHandler}
        checked={value}
      />
      <span className={classNameSpan} />
    </label>
  </>
);

export default Checkbox;
