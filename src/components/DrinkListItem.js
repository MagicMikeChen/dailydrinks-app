import React from 'react';
import { Link } from 'react-router-dom';
import numeral from 'numeral';

const DrinkListItem = ({ id, name, note, amount }) => (
  <Link className="list-item" to={`/edit/${id}`}>
    <div>
      <h3 className="list-item__title">{name}</h3>
      
    </div>
    <p className="list-item__data">{note}</p>
    <p className="list-item__data">{numeral(amount / 100).format('$0,0.00')}</p>
  </Link>
);



export default DrinkListItem;
