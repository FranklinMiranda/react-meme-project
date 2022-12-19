import React from 'react';

const names = ['Franklin', 'Frank', 'Lin', 'Anna', 'Dominic', 'Maria', 'Dominica'];

class Users extends React.Component {
  render() {
    const name = names.map((el, index) => {
      return <li key={index}>{el}</li>;
    });
    return (
      <div className="Users-Div">
        <h1>Users:</h1>
        <ul>{name}</ul>
      </div>
    );
  }
}

export default Users;
