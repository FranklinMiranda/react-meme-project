import React from 'react';

class Form extends React.Component {
  render(props) {
    return (
      <div className="Form">
        <form>

          <input type="text" className="Input-Text" />
          <input type="text" className="Input-Text" />
          <button value="Get a new Meme Image"/>
        </form>
      </div>
    );
  }
}

export default Form;
