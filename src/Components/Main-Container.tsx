import SideBar from "./SideBar";
import "./Style.css";
import WorkArea from "./WorkArea";

const MainContainer = () => {
  return (
    <div className="Main-Container">
      <SideBar />
      <WorkArea />
    </div>
  );
};

export default MainContainer;
