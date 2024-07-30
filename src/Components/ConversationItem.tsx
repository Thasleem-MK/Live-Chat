export interface Props {
  name: string;
  lastMessage: string;
  time: string;
}
const ConversationItem = ({ props }: { props: Props }) => {
  return (
    <div className="conversation-container">
      <p className="con-icon">{props.name[0]}</p>
      <p className="con-title">{props.name}</p>
      <p className="con-lastMessage">{props.lastMessage}</p>
      <p className="con-timestamp">{props.time}</p>
    </div>
  );
};

export default ConversationItem;
