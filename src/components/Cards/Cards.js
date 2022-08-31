import React from 'react';
import styles from './Cards.module.scss';

const Cards = ({ results }) => {
  // we are destructuring the props
  console.log(results);
  let display;
  if (results) {
    display = results.map((eachRes) => {
      let { id, name, image, location, status } = eachRes;
      return (
        <div key={id} className="col-4 position-relative mb-4">
          <div className={styles.cards}>
            <img src={image} alt="" className={`img-fluid ${styles.img}`} />
            <div className="content p-1">
              <div className="fs-4 fw-bold mb-4 text-truncate" title={name}>
                {name}
              </div>
              <div className="">
                <div className="fs-6">Last Location</div>
                <div className="fs-5 text-truncate" title={location.name}>
                  {location.name}
                </div>
              </div>
            </div>
          </div>

          {(() => {
            if (status === 'Dead') {
              return (
                <div
                  className={`${styles.badge} badge text-bg-danger position-absolute text-uppercase`}
                >
                  {status}
                </div>
              );
            } else if (status === 'Alive') {
              return (
                <div
                  className={`${styles.badge} badge text-bg-success position-absolute text-uppercase`}
                >
                  {status}
                </div>
              );
            } else {
              return (
                <div
                  className={`${styles.badge} badge text-bg-secondary position-absolute text-uppercase`}
                >
                  {status}
                </div>
              );
            }
          })()}
        </div>
      );
    });
  } else {
    display = 'No Characters Found :/';
  }
  return <>{display}</>;
};

export default Cards;
