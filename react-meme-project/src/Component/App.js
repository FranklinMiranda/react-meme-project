import React from 'react';
import Header from './Header';
import Meme from './Meme';
import Data from './Data'
import Button from './Button'
import Greeting from './Conditional'

class App extends React.Component {
  render() {
    return (
      <div className="App-Div">
        <Header />
        <Meme />
        <Data/>
        <Button/>
        <Greeting/>
        <Greeting isLoggedIn='True'/>
      </div>
    );
  }
}

export default App;
