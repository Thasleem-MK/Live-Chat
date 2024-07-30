import { IconButton } from "@mui/material";
import "./Style.css";
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
  const [conversations, setConversations] = useState([
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
    <div className="SideBar-Container">
      <div className="sb-header">
        <div>
          <IconButton>
            <AccountCircle />
          </IconButton>
        </div>
        <div>
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
      <div className="sb-search">
        <IconButton>
          <Search />
        </IconButton>
        <input type="text" placeholder="Search" className="sb-search-box" />
      </div>
      <div className="sb-conversation">
        {conversations.map((conversation) => {
          return <ConversationItem props={conversation} />;
        })}
      </div>
    </div>
  );
};

export default SideBar;
