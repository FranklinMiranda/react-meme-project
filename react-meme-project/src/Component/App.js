import React from 'react';
import Header from './Header';
import Form from './Form';
import Image from './Meme';

class App extends React.Component {
  render() {
    return (
      <div className="App-Div">
        <Header />
        <Meme />
      </div>
    );
  }
}

export default App;
