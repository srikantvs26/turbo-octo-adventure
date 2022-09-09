import React from 'react';

const InputGroup = ({ total,name,setId }) => {
    console.log([...Array(total).keys()]);
  return (
      <div class="input-group mb-3" onChange={event=>setId(event.target.value) }>
      <select class="form-select" id={name}>
              <option selected>Choose...</option>
              {
                  [...Array(total).keys()].map(x => {
                      return <option value={x + 1}>{ name} - {x + 1}</option>
                  })
              }

        
       
      </select>
    </div>
  );
};

export default InputGroup;
