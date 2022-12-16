import React from 'react';
import Header from './Header'
import Input from './Input'

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <Input label='Top Text'/>
        <Input label='Bottom Text'/>
      </div>
    );
  }
}

export default App;
