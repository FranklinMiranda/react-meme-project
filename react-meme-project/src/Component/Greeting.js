// Conditional Rendering is used to either render UserGreeting or GuestGreeting depending on the if statement that checks if a prop has been passed in with the property isLoggedIn

const UserGreeting = () => {
  return <h1>Welcome Back!</h1>;
};

const GuestGreeting = () => {
  return <h1>Please Sign Up!</h1>;
};

const Greeting = (props) => {
  const isLoggedIn = props.isLoggedIn;
  if (isLoggedIn) {
    return <div className='Greeting-Div'><UserGreeting /></div>;
  }
  return <div className='Greeting-Div'><GuestGreeting /></div>;
};

export default Greeting;
