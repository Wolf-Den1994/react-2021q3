import React from 'react';
import './cards.scss';

const Cards = ({ values }) => {
  const elements = values.map((value) => {
    const { id } = value;
    return (
      <div className="card" key={id}>
        <p className="name">{value.name}</p>
        <p className="surname">{value.surname}</p>
        <p className="gender">{value.male ? 'Male' : 'Female'}</p>
        <p className="birth">{value.dateOfBirth}</p>
        <p className="country">{value.country}</p>
        <p className="zipcode">{value.zipcode}</p>
        <p className="notifications">{value.notifications}</p>
        <p className="treatment">{value.treatment}</p>
      </div>
    );
  });
  return <div className="cards">{elements}</div>;
};

export default Cards;
