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

const SideBar = () => {
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
              <ConversationItem/>
      </div>
    </div>
  );
};

export default SideBar;
