const MessageSelf = () => {
  let prop2 = {
    name: "You",
    message:
      "This is a sample message.This is the sample message.This is the sample message.This is the sample message.This is the sample message.This is the sample message.This is the sample message.",
  };
  return (
    <div className="self-message-controller">
      <div className="messageBox">
        <p>{prop2.message}</p>
        <p className="self-timestamp">12.00am</p>
      </div>
    </div>
  );
};

export default MessageSelf;
