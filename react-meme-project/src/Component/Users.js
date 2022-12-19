import React from 'react';

const names = ['Franklin', 'Frank', 'Lin', 'Anna', 'Dominic', 'Maria', 'Dominica'];

const name = names.map((el) => {
  return <li>{el}</li>;
});

class Users extends React.Component {
  render() {
    return (
      <div className="Users">
        <h1>Users:</h1>
        <ul>{name}</ul>
      </div>
    );
  }
}

export default Users;
