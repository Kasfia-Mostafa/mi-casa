import { Outlet } from 'react-router-dom';
import Navbar from '../../Pages/Home/Navbar/Navbar';
import '../../Components/Style/Scroll.css'

const Main = () => {

  return (
    <div>
      <Navbar></Navbar>
      <Outlet></Outlet>
    </div>
  );
};

export default Main;