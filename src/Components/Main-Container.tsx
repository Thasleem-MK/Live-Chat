// import SideBar from "./SideBar";
// import "./Style.css";
// import ChatArea from "./ChatArea";

// const MainContainer = () => {
//   return (
//     <div className="Main-Container">
//       <SideBar />
//       <ChatArea
//         props={{
//           name: "Test 1",
//           lastMessage: "Last Message 1",
//           time: "today",
//         }}
//       />
//     </div>
//   );
// };

// export default MainContainer;

import SideBar from "./SideBar";
import ChatArea from "./ChatArea";

const MainContainer = () => {
  return (
    <div className="bg-gray-100 h-[90vh] w-[90vw] flex rounded-lg">
      <div className="w-3/10 h-full">
        <SideBar />
      </div>
      <div className="w-7/10">
      <ChatArea
        props={{
          name: "Test 1",
          lastMessage: "Last Message 1",
          time: "today",
        }}
      />
      </div>
    </div>
  );
};

export default MainContainer;
