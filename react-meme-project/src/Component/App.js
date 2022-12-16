import React from 'react';
import Header from './Header';
import Meme from './Meme';
import Data from './Data'

class App extends React.Component {
  render() {
    return (
      <div className="App-Div">
        <Header />
        <Meme />
        <Data/>
      </div>
    );
  }
}

export default App;
