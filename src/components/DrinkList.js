import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import DrinkListItem from './DrinkListItem';

const DrinkList = (props) => {

  
  return (
  <div className="content-container">
    <div className="list-header">
      <div className="show-for-mobile">Drinks</div>
      <div className="show-for-desktop">Drink</div>
      <div className="show-for-desktop">Notes</div>
      <div className="show-for-desktop">Price</div>
    </div>
    <div className="list-body">
      {
        props.drinks.map((drink) => {
            return <DrinkListItem key={drink.id} {...drink} />;
            })
          
      }
    </div>
      <div className="page-header__actions">
        <Link className="button" to="/create">Add Drink</Link>
      </div>

  </div>
  )}

const mapStateToProps = (state) => {
  return {
    drinks: state.drinks
  }
}


export default connect(mapStateToProps)(DrinkList);
