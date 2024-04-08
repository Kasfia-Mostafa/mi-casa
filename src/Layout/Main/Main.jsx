import { Outlet } from 'react-router-dom';
import '../../Components/Style/Scroll.css'
import Footer from '../../Pages/Home/Footer/Footer';

const Main = () => {

  return (
    <di>
      {/* <Navbar></Navbar> */}
      <Outlet></Outlet>
      <Footer></Footer>
    </di>
  );
};

export default Main;