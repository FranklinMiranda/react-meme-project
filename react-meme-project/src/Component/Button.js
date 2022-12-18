import React from 'react';

class Button extends React.Component {
  constructor(props) {
    super(props);
    this.state = { ButtonStatus: true };

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
        <button onClick={this.handleClick}> {this.state.ButtonStatus ? 'ON' : 'OFF'}</button>
      </div>
    );
  }
}

export default Button;

