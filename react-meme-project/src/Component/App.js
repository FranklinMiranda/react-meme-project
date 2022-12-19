import React from 'react';
import Header from './Header';
import Meme from './Meme';
import Data from './Data';
import Button from './Button';
import Greeting from './Greeting';
import LoginControl from './LoginControl';
import Mailbox from './Mailbox';
import Page from './Page'
import Users from './Users'
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
        <Greeting isLoggedIn={true}/>
        <LoginControl />
        <Mailbox unreadMessages={messages} />
        <Page/>
        <Users/>
      </div>
    );
  }
}

export default App;
