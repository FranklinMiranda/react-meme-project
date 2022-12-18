import React from 'react';
import Greeting from './ConditionalFunctional';

const LoginButton = (props) => {
  return <button onClick={props.onClick}>Login</button>;
};

const LogoutButton = (props) => {
  return <button onClick={props.onClick}>Logout</button>;
};

class LoginControl extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleLoginClick.bind(this);
    this.handleClick = this.handleLogoutClick.bind(this);
    this.state = { isLoggedIn: false };
  }

  handleLoginClick() {
    this.setState({ isLoggedIn: true });
  }

  handleLogoutClick() {
    this.setState({ isLoggedIn: false });
  }

  // Const isLoggedIn variable is setup to use in conditional rendering if statement
  render() {
    const isLoggedIn = this.state.isLoggedIn;
    let button;
    if (isLoggedIn) {
      button = <LogoutButton onClick={this.handleLogoutClick} />;
    } else {
      button = <LoginButton onClick={this.handleLoginClick} />;
    }

    return (
      <div className="LogInControl-Div">
        <Greeting isLoggedIn={isLoggedIn} />
        {button}
      </div>
    );
  }
}
