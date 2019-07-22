import React from 'react';

export default class DrinkForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: props.drink ? props.drink.name : '',
      note: props.drink ? props.drink.note : '',
      amount: props.drink ? (props.drink.amount/100).toString() : '',
      error: ''
    }
  }
  onNameChange = (e) => {
    const name = e.target.value;
    this.setState(() => ({ name }));
  };
  onNoteChange = (e) => {
    const note = e.target.value;
    this.setState(() => ({ note }));
  };
  onAmountChange = (e) => {
    const amount = e.target.value;

    if (!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)) {
      this.setState(() => ({ amount }));
    }
  };
  onSubmit = (e) => {
    e.preventDefault();

    if(!this.state.name || !this.state.amount) {
      this.setState(() => ({ error: 'Please provide name and amount'}));
    } else {
      this.setState(() => ({ error: '' }));
      this.props.onSubmit({
        name: this.state.name,
        note:this.state.note,
        amount: parseFloat(this.state.amount, 10) * 100
      })
    }
  };
  render() {
    return ( 
      <div>
        
        <form className="form" onSubmit={this.onSubmit}>
        {this.state.error && <p className="form__error">{this.state.error}</p>}
          <input
            type="text"
            placeholder="Name"
            autoFocus
            value={this.state.name}
            onChange={this.onNameChange}
            />
          <input
            type="text"
            placeholder="Amount"
            value={this.state.amount}
            onChange={this.onAmountChange}
          />
          <textarea
            placeholder="Add a note to your drink (optional)"
            value={this.state.note}
            onChange={this.onNoteChange}
          >
          </textarea>
        <button className="button">Add Drink</button>
        </form>
      </div>
    )
  }

}