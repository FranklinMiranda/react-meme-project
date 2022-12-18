import React from 'react';
import Header from './Header';
import Meme from './Meme';
import Data from './Data';
import Button from './Button';
import Greeting from './ConditionalFunctional';
import LoginControl from './CondtionalState';
import Mailbox from './InlineConditional&&';

const messages = ['React', 'Re:React', 'Re:Re: React'];

class App extends React.Component {
  render() {
    return (
      <div className="App-Div">
        <Header />
        <Meme />
        <Data />
        <Button />
        <Greeting />
        <Greeting isLoggedIn="True" />
        <LoginControl />
        <Mailbox unreadMessages={messages} />
      </div>
    );
  }
}

export default App;
