import React from 'react';

class Meme extends React.Component {
  render() {
    return <div className="Meme-Div">
        <form>
            <input type='text'/>
            <input type='text'/>
            <button>Get a new meme image</button>
        </form>
    </div>;
  }
}
