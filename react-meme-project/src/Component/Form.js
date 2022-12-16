import React from 'react';

class Form extends React.Component {
  render(props) {
    return (
      <div className="Form-Div">
        <form className="Form">
          <div className="Form-Inputs">
            <input type="text" className="Input-Text" />
            <input type="text" className="Input-Text" />
          </div>
          <input type="submit" value="Get a new Meme Image" />
        </form>
      </div>
    );
  }
}

export default Form;
