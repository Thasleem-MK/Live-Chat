const MessageOthers = () => {
  let props1 = { name: "Random User", Message: "This is a sample message.This is the sample message.This is the sample message.This is the sample message.This is the sample message.This is the sample message.This is the sample message."};
  return (
    <div className="Other-messge-container">
      <div className="conversation-container">
        <p className="con-icon">{props1.name[0]}</p>
        <div className="other-text-content">
          <p className="con-title">{props1.name}</p>
          <p className="con-lastMessage">{props1.Message}</p>
          <p className="self-timestamp">12.00am</p>
        </div>
      </div>
    </div>
  );
};

export default MessageOthers;
