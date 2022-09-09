import React, { useState, useEffect } from 'react';
import Cards from '../components/Cards/Cards';
import InputGroup from '../components/Filters/Category/InputGroup';

const Episodes = () => {
  let [id, setId] = useState(1);
  let [info, setInfo] = useState({});
  let [results, setResults] = useState([]);
  let api = `https://rickandmortyapi.com/api/episode/${id}`;
  //  console.log(info);
  //  console.log(info.characters);
  let { air_date, name } = info;
  useEffect(() => {
    (async function () {
      let data = await fetch(api).then((response) => response.json());
      //  console.log(data);
      // console.log(data.characters);
      // console.log(typeof (data.characters));
      setInfo(data);
      // let a = await Promise.all(
      //   data.characters.map((character) => {
      //     return fetch(character).then(response => response.json());
      //   })
      // );
      // Promise.all takes a lot of promises and resolves them all
      let a = await Promise.all(
        data.characters.map(character => fetch(character).then((response) => response.json()))
      );
      // console.log(a);
      setResults(a);
    })();
  }, [api]);

  return (
    <div className="container">
      <div className="row mb-4">
        <h1 className="text-center mb-4">
          Episode :{' '}
          <span className="text-primary">{name === '' ? 'Unknown' : name}</span>
        </h1>
        <h5 className="text-center">
          Air Date : {air_date === '' ? 'Unknown' : air_date}
        </h5>
      </div>
      <div className="row">
        <div className="col-3">
          <h4 className="text-center mb-4">Pick Episodes</h4>
          <InputGroup total={51} name="Episode" setId={setId}/>
          </div>
        <div className="col-8">
          <div className="row"><Cards results={results}/></div>
        </div>
      </div>
    </div>
  );
};

export default Episodes;
