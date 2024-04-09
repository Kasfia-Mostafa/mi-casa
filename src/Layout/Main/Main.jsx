import { Outlet } from 'react-router-dom';
import '../../Components/Style/Scroll.css'
import Footer from '../../Pages/Home/Footer/Footer';
import Navbar from '../../Pages/Home/Navbar/Navbar';

const Main = () => {

  return (
    <di>
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
    </di>
  );
};

export default Main;