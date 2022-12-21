import React from 'react';

// Handle Multiple Inputs by adding a name attribute to the input elements and then letting the handler select them based on event.target.name
class Reservations extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isGoing: true, numberOfGuests: 2 };

    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;
  }



}
