import React from 'react';

class Input extends React.Component {
  render(props) {
    return (
      <div className="Input">
        <h3>{this.props.label}</h3>
        <input type="text" className='Input-Text'/>
      </div>
    );
  }
}

export default Input