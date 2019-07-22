import React from 'react';
import { connect } from 'react-redux';
import DrinkForm from './DrinkForm';
import { editDrink, removeDrink } from '../actions/drinks';

export class EditDrinkPage extends React.Component {
  
  onSubmit = (drink) => {
    this.props.editDrink(this.props.drink.id, drink);
    this.props.history.push('/');
  };
  onRemove = () => {
    this.props.removeDrink({ id: this.props.drink.id });
    this.props.history.push('/');
  };
  render() {
    return (
      <div>
        <div className="page-header">
          <div className="content-container">
            <h1 className="page-header__title">Edit Drink</h1>
          </div>
        </div>
        <div className="content-container">
          <DrinkForm
            drink={this.props.drink}
            onSubmit={this.onSubmit}
          />
          <button className="button button--secondary" onClick={this.onRemove}>Remove Drink</button>
        </div>
      </div>
    );
  }
};

const mapStateToProps = (state, props) => ({
  drink: state.drinks.find((drink) => drink.id === props.match.params.id)
});

const mapDispatchToProps = (dispatch, props) => ({
  editDrink: (id, drink) => dispatch(editDrink(id, drink)),
  removeDrink: (data) => dispatch(removeDrink(data))
});

export default connect(mapStateToProps, mapDispatchToProps)(EditDrinkPage);
