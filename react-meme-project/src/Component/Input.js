import React from 'react';

class Input extends React.Component {
  render(props) {
    return (
      <div className="Input">
        <h3>{this.props.label}</h3>
        <input type="text" />
      </div>
    );
  }
}

export default Input