// Conditional Rendering Example using Inline If with the Logical && Operator

function Mailbox(props) {
  const unreadMessages = props.unreadMessages;
  return (
    <div className="Mailbox-Div">
      <h1>Hello!</h1>
      {unreadMessages.length > 0 && <h2>You have {unreadMessages.length} unread messages.</h2>}
    </div>
  );
}


export default Mailbox 