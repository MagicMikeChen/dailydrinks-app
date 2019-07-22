import React from 'react';
import { connect } from 'react-redux';
import DrinkForm from './DrinkForm';
import { AddDrink } from '../actions/drinks';

export class AddDrinkPage extends React.Component {
  onSubmit = (drink) => {
    this.props.AddDrink(drink);
    this.props.history.push('/');
  };
  render() {
    return (
      <div>
        <div className="page-header">
          <div className="content-container">
            <h1 className="page-header__title">Add Drink</h1>
          </div>
        </div>
        <div className="content-container">
          <DrinkForm
            onSubmit={this.onSubmit}
          />
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  AddDrink: (drink) => dispatch(AddDrink(drink))
});

export default connect(undefined, mapDispatchToProps)(AddDrinkPage);
