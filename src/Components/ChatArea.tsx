// import { IconButton } from "@mui/material";
// import { Props } from "./ConversationItem";
// import "./Style.css";
// import { Delete, Send } from "@mui/icons-material";
// import MessageOthers from "./MessageOthers";
// import MessageSelf from "./MessageSelf";

// const ChatArea = ({ props }: { props: Props }) => {
//   return (
//     <div className="ChatArea-Container">
//       <div className="chatArea-header">
//         <p className="con-icon">{props.name[0]}</p>
//         <div className="header-text">
//           <p className="con-title">{props.name}</p>
//           <p className="con-timestamp">{props.time}</p>
//         </div>
//         <IconButton>
//           <Delete />
//         </IconButton>
//       </div>

//       <div className="chatArea-message">
//         <MessageOthers/>
//         <MessageSelf/>
//         <MessageOthers/>
//         <MessageSelf/>
//         <MessageOthers/>
//         <MessageSelf/>
//         <MessageOthers/>
//         <MessageSelf/>
//         <MessageOthers/>
//         <MessageSelf/>
//         <MessageOthers/>
//         <MessageSelf/>
//       </div>

//       <div className="chatArea-input">
//         <textarea placeholder="Type a message" className="search-box" rows={1}/>
//         <IconButton>
//           <Send />
//         </IconButton>
//       </div>
//     </div>
//   );
// };

// export default ChatArea;

import { IconButton } from "@mui/material";
import { Props } from "./ConversationItem";
import { Delete, Send } from "@mui/icons-material";
import MessageOthers from "./MessageOthers";
import MessageSelf from "./MessageSelf";

const ChatArea = ({ props }: { props: Props }) => {
  return (
    <div className="flex-1 flex flex-col p-4 space-y-4 bg-white rounded-lg shadow h-full">
      <div className="flex items-center space-x-2">
        <p className="flex justify-center items-center bg-gray-400 text-white text-2xl font-bold h-8 w-8 rounded-full">
          {props.name[0]}
        </p>
        <div className="flex-1">
          <p className="font-bold text-gray-800">{props.name}</p>
          <p className="text-sm text-gray-500">{props.time}</p>
        </div>
        <IconButton>
          <Delete />
        </IconButton>
      </div>
      <hr style={{ marginTop: 5 }} />
      <div className="flex-1 flex flex-col space-y-2 overflow-y-auto">
        <MessageOthers />
        <MessageSelf />
        <MessageOthers />
        <MessageSelf />
        <MessageOthers />
        <MessageSelf />
        <MessageOthers />
        <MessageSelf />
      </div>

      <div className="flex items-center space-x-2 p-2 bg-gray-200 rounded">
        <textarea
          placeholder="Type a message"
          rows={1}
          className="flex-1 outline-none bg-transparent resize-none"
        />
        <IconButton>
          <Send />
        </IconButton>
      </div>
    </div>
  );
};

export default ChatArea;
