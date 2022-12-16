import React from 'react';
import Header from './Header';
import Input from './Input';
import Button from './Button';
import Image from './Image';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Input label="Top Text" />
        <Input label="Bottom Text" />
        <Button/>
        <Image/>
      </div>
    );
  }
}

export default App;
