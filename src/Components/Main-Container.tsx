import SideBar from "./SideBar";
import "./Style.css";
import ChatArea from "./ChatArea";

const MainContainer = () => {
  return (
    <div className="Main-Container">
      <SideBar />
      <ChatArea
        props={{
          name: "Test 1",
          lastMessage: "Last Message 1",
          time: "today",
        }}
      />
    </div>
  );
};

export default MainContainer;
