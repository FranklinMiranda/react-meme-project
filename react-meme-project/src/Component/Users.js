import React from 'react';

const names = ['Franklin', 'Frank', 'Lin', 'Anna', 'Dominic', 'Maria', 'Dominica'];

class Users extends React.Component {
  render() {
    const name = names.map((el) => {
      return <li>{el}</li>;
    });
    return (
      <div className="Users">
        <h1>Users:</h1>
        <ul>{name}</ul>
      </div>
    );
  }
}

export default Users;
