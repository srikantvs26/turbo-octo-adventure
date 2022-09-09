import React, { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';
import './Pagination.module.scss';

const Pagination = ({ info, pageNumber, setPageNumber }) => {
  let [width, setWidth] = useState(window.innerWidth);
  let updateDimension = () => {
    setWidth(window.innerWidth);
    console.log(window.innerWidth);
  }
  useEffect(() => {
    window.addEventListener("resize", updateDimension)
    
    return () => window.removeEventListener("resize", updateDimension);
  }, []);
  
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
    <>
      <style jsx="true">
        {`
          @media (max-width:768px){
            .next, .prev{
              display : none;
            }
          }
        `}
      </style>
    <ReactPaginate
      pageCount={info?.pages}
      className="pagination justify-content-center gap-4 my-4 text-white"
      previousLabel="< Prev"
      nextLabel="Next >"
      pageRangeDisplayed={width<576?1 :2}
      previousClassName="btn btn-primary prev"
      nextClassName="btn btn-primary next"
      forcePage={pageNumber === 1 ? 0 : pageNumber - 1}
      pageClassName="page-item"
      pageLinkClassName="page-link"
        activeClassName="active"
        marginPagesDisplayed={width<576?1 :2}
        
      // below data is nothing but event. How we got selected? first console.log(event) then you will come to know.
      // +1 because React-Paginate starts the page with 0, data.selected will be zero.
      onPageChange={(data) => {
        // console.log(data.selected);
        setPageNumber(data.selected + 1);
        // document.body.scrollTop = document.documentElement.scrollTop = 0;
        window.scrollTo(0, 0);
      }}
      />
      </>
  );
};

export default Pagination;
