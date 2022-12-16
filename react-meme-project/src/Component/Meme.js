import React from 'react';

// There are two differnet ways to add event listeners to a Web App
// The first way is using JavaScript .addEventListener('click', function () {})
// The second way is using the onClick attribute in HTML
// In React we used onClick and can directly write a function within {}

class Meme extends React.Component {
  render() {
    function handleClick() {
      console.log('I was clicked!');
    }
    return (
      <div className="Meme-Div">
        <div className="Meme-Form">
          <input type="text" className="Meme-Input" placeholder="Top Text" />
          <input type="text" className="Meme-Input" placeholder="Bottom Text" />
          <button className="Meme-Button" onClick={handleClick}>
            Get a new meme image
          </button>
        </div>
        <div className="Image-Div">
          <img></img>
        </div>
      </div>
    );
  }
}

export default Meme;
