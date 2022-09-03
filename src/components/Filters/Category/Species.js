import React from 'react';
import FilterBTN from '../FilterBTN';

const Species = ({ setSpecies, setPageNumber }) => {
  const species = [
    'Human',
    'Alien',
    'Humanoid',
    'Poopybutthole',
    'Unknown',
    'Animal',
    'Disease',
    'Robot',
    'Planet',
    'Mythological',
  ];

  return (
    <div className="accordion-item">
      <h2 className="accordion-header" id="headingTwo">
        <button
          className="accordion-button collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapseTwo"
          aria-expanded="false"
          aria-controls="collapseTwo"
        >
          Species
        </button>
      </h2>
      <div
        id="collapseTwo"
        className="accordion-collapse collapse"
        aria-labelledby="headingTwo"
        data-bs-parent="#accordionExample"
      >
        <div className="accordion-body d-flex flex-wrap gap-3">
          {species.map((items, index) => {
            return (
              <FilterBTN
                key={index}
                name="species"
                index={index}
                items={items}
                setPageNumber={setPageNumber}
                task={setSpecies}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Species;
