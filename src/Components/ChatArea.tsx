import { IconButton } from "@mui/material";
import { Props } from "./ConversationItem";
import "./Style.css";
import { Delete, Send } from "@mui/icons-material";
import MessageOthers from "./MessageOthers";
import MessageSelf from "./MessageSelf";

const ChatArea = ({ props }: { props: Props }) => {
  return (
    <div className="ChatArea-Container">
      <div className="chatArea-header">
        <p className="con-icon">{props.name[0]}</p>
        <div className="header-text">
          <p className="con-title">{props.name}</p>
          <p className="con-timestamp">{props.time}</p>
        </div>
        <IconButton>
          <Delete />
        </IconButton>
      </div>

      <div className="chatArea-message">
        <MessageOthers/>
        <MessageSelf/>
        <MessageOthers/>
        <MessageSelf/>
        <MessageOthers/>
        <MessageSelf/>
        <MessageOthers/>
        <MessageSelf/>
        <MessageOthers/>
        <MessageSelf/>
        <MessageOthers/>
        <MessageSelf/>
      </div>

      <div className="chatArea-input">
        <textarea placeholder="Type a message" className="search-box" rows={1}/>
        <IconButton>
          <Send />
        </IconButton>
      </div>
    </div>
  );
};

export default ChatArea;
