import React from 'react';
import Header from './Header';
import Form from './Form';
import Image from './Image';

class App extends React.Component {
  render() {
    return (
      <div className="App-Div">
        <Header />
        <Form />
        <Image />
      </div>
    );
  }
}

export default App;
