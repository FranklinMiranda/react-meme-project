import React from 'react';
import Header from './Header';
import Meme from './Meme';
import Data from './Data';
import Button from './Button';
import Greeting from './Greeting';
import LoginControl from './LoginControl';
import Mailbox from './Mailbox';
import Page from './Page';
import Users from './Users';
import Blog from './Blog';
import NameForm from './NameForm';
import EssayForm from './EssayForm';
import FlavorForm from './FlavorForm'
import Reservations from './Reservations';
import Calculator from './Temperature';

const messages = ['React', 'Re:React', 'Re:Re: React'];
const posts = [
  { id: 1, title: 'Hello World', content: 'Welcome to learning React!' },
  { id: 2, title: 'Installation', content: 'You can install React from npm.' },
];

class App extends React.Component {
  render() {
    return (
      <div className="App-Div">
        <Header />
        <Meme />
        <Data />
        <Button />
        <Greeting />
        <Greeting isLoggedIn={true} />
        <LoginControl />
        <Mailbox unreadMessages={messages} />
        <Page />
        <Users />
        <Blog posts={posts} />
        <NameForm/>
        <EssayForm/>
        <FlavorForm/>
        <Reservations/>
        <Calculator/>
      </div>
    );
  }
}

export default App;
