import React from 'react';
import style from './Card.module.css';

const Card = () => {
  return (
    <div className={'container'}>
      <div className={`${style.card} p-2 shadow rounded border`}>
        <img className={`card-img-top`} src="img/casio.svg" alt="Card image" />
        <div className={"card-body py-3"}>
          <h5 className={"card-title"}>Jam Tangan Casio</h5>
          <small className={"card-text text-muted"}>Aksesoris</small>
          <p className={'mt-2'}>Rp50.000</p>
        </div>
      </div>
    </div>
  )
}

export default Card