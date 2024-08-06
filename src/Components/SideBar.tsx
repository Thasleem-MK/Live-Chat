// import { IconButton } from "@mui/material";
// import "./Style.css";
// import {
//   AccountCircle,
//   AddCircle,
//   GroupAdd,
//   Nightlight,
//   PersonAdd,
//   Search,
// } from "@mui/icons-material";
// import ConversationItem from "./ConversationItem";
// import { useState } from "react";

// const SideBar = () => {
//   const [conversations] = useState([
//     {
//       name: "Test 1",
//       lastMessage: "Last Message 1",
//       time: "today",
//     },
//     {
//       name: "Test 2",
//       lastMessage: "Last Message 2",
//       time: "today",
//     },
//     {
//       name: "Test 3",
//       lastMessage: "Last Message 3",
//       time: "today",
//     },
//   ]);

//   return (
//     <div className="SideBar-Container">
//       <div className="sb-header">
//         <div>
//           <IconButton>
//             <AccountCircle />
//           </IconButton>
//         </div>
//         <div>
//           <IconButton>
//             <PersonAdd />
//           </IconButton>
//           <IconButton>
//             <GroupAdd />
//           </IconButton>
//           <IconButton>
//             <AddCircle />
//           </IconButton>
//           <IconButton>
//             <Nightlight />
//           </IconButton>
//         </div>
//       </div>
//       <div className="sb-search">
//         <IconButton>
//           <Search />
//         </IconButton>
//         <input type="text" placeholder="Search" className="sb-search-box" />
//       </div>
//       <div className="sb-conversation">
//         {conversations.map((conversation,index) => {
//           return <ConversationItem props={conversation} key={index}/>;
//         })}
//       </div>
//     </div>
//   );
// };

// export default SideBar;

import { IconButton } from "@mui/material";
import {
  AccountCircle,
  AddCircle,
  GroupAdd,
  Nightlight,
  PersonAdd,
  Search,
} from "@mui/icons-material";
import ConversationItem from "./ConversationItem";
import { useState } from "react";

const SideBar = () => {
  const [conversations] = useState([
    {
      name: "Test 1",
      lastMessage: "Last Message 1",
      time: "today",
    },
    {
      name: "Test 2",
      lastMessage: "Last Message 2",
      time: "today",
    },
    {
      name: "Test 3",
      lastMessage: "Last Message 3",
      time: "today",
    },
  ]);

  return (
    <div className="flex-1 flex flex-col p-4 space-y-4 bg-white rounded-lg shadow h-full">
      <div className="flex justify-between items-center">
        <IconButton>
          <AccountCircle />
        </IconButton>
        <div className="flex space-x-2">
          <IconButton>
            <PersonAdd />
          </IconButton>
          <IconButton>
            <GroupAdd />
          </IconButton>
          <IconButton>
            <AddCircle />
          </IconButton>
          <IconButton>
            <Nightlight />
          </IconButton>
        </div>
      </div>
      <div className="flex items-center space-x-2 bg-gray-200 rounded p-2">
        <IconButton>
          <Search />
        </IconButton>
        <input
          type="text"
          placeholder="Search"
          className="flex-1 outline-none bg-transparent"
        />
      </div>
      <div className="flex-1 overflow-y-auto space-y-2">
        {conversations.map((conversation, index) => (
          <ConversationItem props={conversation} key={index} />
        ))}
      </div>
    </div>
  );
};

export default SideBar;