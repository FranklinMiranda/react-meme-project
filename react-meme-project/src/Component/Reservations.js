import React from 'react';

// Handle Multiple Inputs by adding a name attribute to the input elements and then letting the handler select them based on event.target.name
class Reservations extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isGoing: true, numberOfGuests: 2 };

    this.handleInputChange = this.handleInputChange.bind(this);
  }

  // Declare Target and Name variables to simplify using them in the event handler inside
  handleInputChange(event) {
    const target = event.target;
    const name = target.name;

    const value = target.type === 'checkbox' ? target.checked : target.value;

    this.setState({ [name]: value });
  }

  render() {
    return (
      <form>
        <label>
          Is going:
          <input name="isGoing" type="checkbox" checked={this.state.isGoing} onChange={this.handleInputChange} />
        </label>
        <br />
        <label>
          Number of guests:
          <input name="numberOfGuests" type="number" value={this.state.numberOfGuests} onChange={this.handleInputChange} />
        </label>
      </form>
    );
  }
}

export default Reservations;

