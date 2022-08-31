import React from 'react';

const Pagination = ({ pageNum }) => {
  let next = () => {
    pageNum((x) => x + 1);
  };
  let prev = () => {
    pageNum((x) => x - 1);
  };

  return (
    <div className="container d-flex justify-content-center gap-5 my-5">
      <button type="button" onClick={prev} className="btn btn-primary">
        Prev
      </button>
      <button type="button" onClick={next} className="btn btn-primary">
        Next
      </button>
    </div>
  );
};

export default Pagination;
