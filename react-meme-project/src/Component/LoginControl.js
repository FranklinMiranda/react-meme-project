import React from 'react';
import Greeting from './Greeting';

function LoginButton(props) {
  return <button onClick={props.onClick}>Login</button>;
};

function LogoutButton(props) {
  return <button onClick={props.onClick}>Logout</button>;
};

// Stateful Component Example with Conditional Rendering 
class LoginControl extends React.Component {
  constructor(props) {
    super(props);
    this.handleLoginClick = this.handleLoginClick.bind(this);
    this.handleLogoutClick = this.handleLogoutClick.bind(this);
    this.state = { isLoggedIn: false };
  }

  handleLoginClick() {
    this.setState({ isLoggedIn: true });
  }

  handleLogoutClick() {
    this.setState({ isLoggedIn: false });
  }

  // Const isLoggedIn variable is setup to store the state property isLoggedIn to be used in the conditional rendering if statement
  // If Statement can also be rewritten using a ternary operator but it is less readable 
  render() {
    const isLoggedIn = this.state.isLoggedIn;
    let button;
    if (isLoggedIn) {
      button = <LogoutButton onClick={this.handleLogoutClick} />;
    } else {
      button = <LoginButton onClick={this.handleLoginClick} />;
    }

    return (
      <div className="LoginControl-Div">
        <Greeting isLoggedIn={isLoggedIn} />
        <h1>The User is {isLoggedIn ? 'currently' : 'not'} logged in.</h1>
        {button}
      </div>
    );
  }
}

export default LoginControl