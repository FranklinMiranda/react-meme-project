import React from 'react';

class Meme extends React.Component {
  render() {
    return (
      <div className="Meme-Div">
        <form className="Meme-Form">
          <input type="text" className="Meme-Input" placeholder='Top Text'/>
          <input type="text" className="Meme-Input" placeholder='Bottom Text'/>
          <button className="Meme-Button">Get a new meme image</button>
        </form>
      </div>
    );
  }
}

export default Meme;
