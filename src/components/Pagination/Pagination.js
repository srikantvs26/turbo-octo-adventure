import React from 'react';
import ReactPaginate from 'react-paginate';
import "./Pagination.module.scss"

const Pagination = ({ info, pageNumber, setPageNumber }) => {
  // console.log("info"+info)
  // console.log("info="+info.pages);
  // let next = () => {
  //   setPageNumber((x) => x + 1);
  // };
  // let prev = () => {
  //   // to handle if x goes negative.
  //   if (pageNumber === 1) return;
  //   setPageNumber((x) => x - 1);
  // };

  return (
    // <div className="container d-flex justify-content-center gap-5 my-5">
    //   <button type="button" onClick={prev} className="btn btn-primary">
    //     Prev
    //   </button>
    //   <button type="button" onClick={next} className="btn btn-primary">
    //     Next
    //   </button>
    // </div>
    <ReactPaginate
      pageCount={info?.pages}
      className="pagination justify-content-center gap-4 my-4 text-white"
      previousLabel="< Prev"
      nextLabel="Next >"
      pageRangeDisplayed={5}
      previousClassName="btn btn-primary"
      nextClassName="btn btn-primary"
      forcePage={pageNumber===1?0:pageNumber-1}
      pageClassName="page-item"
      pageLinkClassName="page-link"

      activeClassName="active"
      
    // below data is nothing but event. How we got selected? first console.log(event) then you will come to know.
      // +1 because React-Paginate starts the page with 0, data.selected will be zero.
      onPageChange={(data) => {
        // console.log(data.selected);
        setPageNumber(data.selected + 1);
        // document.body.scrollTop = document.documentElement.scrollTop = 0;
        window.scrollTo(0, 0);
      }}
    />
    
   
  );
};

export default Pagination;
