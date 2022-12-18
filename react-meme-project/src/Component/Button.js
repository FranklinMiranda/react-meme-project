import React from 'react';

class Button extends React.Component {
  constructor(props) {
    super(props);
    this.state = { ButtonStatus: True };

    // This Bind is require to have this in the handleClick Callback reference this in the ES6 class
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState((prevState) => ({
      ButtonStatus: !prevState.ButtonStatus,
    }));
  }

  render() {
    return (
      <div className="Button">
        <h1>{this.state.ButtonStatus ? 'ON' : 'OFF'}</h1>
      </div>
    );
  }
}

export default Button