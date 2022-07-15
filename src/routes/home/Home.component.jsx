import { Outlet } from "react-router-dom";
//
import Directory from "../../components/directory/Directory.component";

const Home = () => {
  return (
    <div>
      <Outlet />
      <Directory />
    </div>
  );
};

export default Home;
