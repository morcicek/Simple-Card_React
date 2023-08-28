import React from 'react';
import cardStyle from '../scss/card.module.scss';
function Card({ data }) {
  return (
    <div className={cardStyle['container']}>
      {data.map((item) => {
        const { id, name, job, text, img } = item;
        return (
          <div key={id} className={cardStyle['card']}>
            <h1>{name}</h1>
            <h2>{job}</h2>
            <p>{text}</p>
            <img src={img} alt="" />
            <div className={cardStyle['btn-container']}>
              <button className={cardStyle['btn-container--small']}>
                Small
              </button>
              <button className={cardStyle['btn-container--large']}>
                Large
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Card;
