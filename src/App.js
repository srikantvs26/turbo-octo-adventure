import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.js';
import Cards from './components/Cards/Cards';
import Filters from './components/Filters/Filters';
import React, { useState, useEffect } from 'react';
import Pagination from './components/Pagination/Pagination';
import Search from './components/Search/Search';

function App() {
  let [pageNumber, setPageNumber] = useState(1); // state to hold page Number
  let [search, setSearch] = useState('');
  // console.log(pageNumber);
  let [fetchedData, updateFetchedData] = useState({}); // state to hold character information
  // console.log("fetched DAta" + { fetchedData });
  let { info, results } = fetchedData; // destructuring assignment. we will send the results to Card Component. and info to Pagination component.
  // console.log(results);
  // console.log(info);
  // console.log(typeof (info.pages));
  // console.log(info.pages);
  // console.log(JSON.stringify(info));

   let api = `https://rickandmortyapi.com/api/character/?page=${pageNumber}&name=${search}`;
  
  useEffect(() => {
    (async function () {
      let data = await fetch(api).then((response) => response.json());
      //  data is a big json object if we want to access data a particular key data.info, data.results we have to use.
      // console.log(data.info);
      // console.log(data.results);
      // console.log(data);
      // console.log(typeof (data));
      updateFetchedData(data);
    })();
  }, [api]);

  return (
    <div className="App">
      <h1 className="text-center ubuntu my-4">
        Rick & Morty <span className="text-primary">WiKi</span>
      </h1>

      <Search setPageNumber={ setPageNumber} setSearch={setSearch }/>

      <div className="container">
        <div className="row">
          <div className="col-3">
            <Filters />
          </div>
          <div className="col-8">
            <div className="row">
              <Cards results={results} />
            </div>
          </div>
        </div>
      </div>
      <Pagination info={ info} pageNumber={pageNumber} setPageNumber={setPageNumber} />
    </div>
  );
}

export default App;
