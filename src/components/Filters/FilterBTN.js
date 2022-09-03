import React from 'react';

const FilterBTN = ({ name, index, items, task, setPageNumber }) => {
  return (
    <div>
      <style jsx="true">
        {`
          input[type='radio'] {
            display: none;
          }

          .x:checked + label {
            color: white;
            background-color: #0b5ed7;
          }
        `}
      </style>

      <div className="form-check text-uppercase">
        <input
          onClick={() => {
            setPageNumber(1);
            task(items);
          }}
          className="form-check-input x"
          type="radio"
          name={name}
          id={`${name}-${index}`}
        />
        <label className="btn btn-outline-primary" htmlFor={`${name}-${index}`}>
          {items}
        </label>
      </div>
    </div>
  );
};

export default FilterBTN;
