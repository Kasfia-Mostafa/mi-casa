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
import UserReviews from "../Pages/Dashboard/User/UserReviews/UserReviews";
import UserReview from "../Pages/Dashboard/User/UserReviews/UserReview";
import AdminProfile from "../Pages/Dashboard/Admin/AdminProfile/AdminProfile";
import ManageUsers from "../Pages/Dashboard/Admin/ManageUsers/ManageUsers";
import AgentProfile from "../Pages/Dashboard/Agent/AgentProfile/AgentProfile";
import AllReviews from "../Pages/Dashboard/Admin/AllReviews/AllReviews";
import AddProperty from "../Pages/Dashboard/Agent/AddProperty/AddProperty";
import ManageProperties from "../Pages/Dashboard/Admin/ManageProperties/ManageProperties";
import AddedProperties from "../Pages/Dashboard/Agent/AddedProperties/AddedProperties";
import SoldProperties from "../Pages/Dashboard/Agent/SoldProperties/SoldProperties";
import RequestedProperties from "../Pages/Dashboard/Agent/RquestedProperties/RequestedProperties";
import PropertyBought from "../Pages/Dashboard/User/PropertyBought/PropertyBought";
import Accepted from "../Pages/Dashboard/User/Accepted/Accepted";

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
            path: "propertyBought",
            element: <PropertyBought></PropertyBought>,
          },
          {
            path: "wishlist",
            element: <Wishlist></Wishlist>,
          },
          {
            path: "wishlist/:id",
            element: <Offered></Offered>,
            loader: ({ params }) =>
              fetch(`http://localhost:5000/wishlist/${params.id}`),
          },
          {
            path: "reviews",
            element: <UserReviews></UserReviews>,
          },
          {
            path: "reviews/:email",
            element: <UserReviews></UserReviews>,
            loader: ({ params }) =>
              fetch(`http://localhost:5000/review/${params.email}`),
          },
          {
            path: "reviews/:id",
            element: <UserReviews></UserReviews>,
            loader: ({ params }) =>
              fetch(`http://localhost:5000/property/${params.id}`), 
          },
          {
            path: "reviews/:title",
            element: <UserReview></UserReview>,
            loader: ({ params }) =>
              fetch(`http://localhost:5000/review/${params.title}`),
          },
            //Admin Profile
          {
            path: "adminProfile",
            element: <AdminProfile></AdminProfile>,
          },
          {
            path: "manage_users",
            element: <ManageUsers></ManageUsers>,
          },
          {
            path: "manage_reviews",
            element: <AllReviews></AllReviews>,
            loader: ({ params }) =>
              fetch(`http://localhost:5000/review/${params.id}`),
          },
          {
            path: "manage_properties",
            element: <ManageProperties></ManageProperties>,
          },
          //Agent Profile
          {
            path: "agentProfile",
            element: <AgentProfile></AgentProfile>,
          },
          {
            path: "add_property",
            element: <AddProperty></AddProperty>,
          },
          {
            path: "addedProperties",
            element: <AddedProperties></AddedProperties>
          },
          {
            path: "soldProperties",
            element: <SoldProperties></SoldProperties>
          },
          {
            path: "requestProperties",
            element: <RequestedProperties></RequestedProperties>
          },
        ],
      },
    ],
  },
]);

export default router;
