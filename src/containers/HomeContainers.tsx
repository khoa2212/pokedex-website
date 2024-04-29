import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import { Outlet } from "react-router-dom";

const HomeContainers = (): JSX.Element => {
  return (
    <div className="h-screen w-full overflow-hidden">
      <Header />
      <div className="h-full w-full overflow-auto">
        <div className="w-full min-h-screen px-4 lg:px-6 py-2.5 mt-20">
          <Outlet />
        </div>
        <Footer className="h-14 flex items-center justify-center" />
      </div>
    </div>
  );
};

export default HomeContainers;
