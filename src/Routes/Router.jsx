import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main/Main";
import HomePage from "../Pages/Home/HomePage/HomePage";
import Login from "../Layout/Login/Login";
import Register from "../Layout/Register/Registration";
import Properties from "../Pages/AllProperties/Properties/Properties";
import PropertyDetails from "../Pages/AllProperties/PropertyDetails/PropertyDetails";
import PrivateRoute from "../Layout/PrivateRoute/PrivateRoute";
import Reviews from "../Pages/AllProperties/Reviews/Reviews";
import DashboardPage from "../Pages/Dashboard/DashBoardPage/DashboardPage";
import UserProfile from "../Pages/Dashboard/User/UserProfile/UserProfile";
import Wishlist from "../Pages/Dashboard/User/Wishlist/Wishlist";
import Offered from "../Pages/Dashboard/User/Offered/Offered";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <HomePage></HomePage>,
      },
      {
        path: "allProperties",
        element: <Properties></Properties>,
        loader: () => fetch(`http://localhost:5000/propertyCount`),
      },
      {
        path: "allProperties/:id",
        element: <PropertyDetails></PropertyDetails>,
        // element:<PrivateRoute><PropertyDetails></PropertyDetails></PrivateRoute>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/property/${params.id}`),
      },
      {
        path: "review/:title",
        element: <Reviews></Reviews>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/review/${params.title}`),
      },
      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "register",
        element: <Register></Register>,
      },
      {
        path: "dashboard",
        element: <DashboardPage></DashboardPage>,
        children: [
          {
            path: "userProfile",
            element: <UserProfile></UserProfile>,
          },
          {
            path: "wishlist",
            element: <Wishlist></Wishlist>,
           
          },
          {
            path: "wishlist/:id",
            element: <Offered></Offered>,
            loader: ({ params }) =>
            fetch(`http://localhost:5000/wishList/${params.id}`),
           
          },
        ],
      },
    ],
  },
]);

export default router;
