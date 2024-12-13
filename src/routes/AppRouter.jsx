import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import AddEquipment from "../pages/AddEquipment";
import AllEquipment from "../pages/AllEquipment";
import Home from "../pages/Home";
import Login from "../pages/Login";
import ViewDetails from "../pages/ViewDetails";
import MyEquipment from "../pages/MyEquipment";
import SignUp from "../pages/SignUp";

// const { createBrowserRouter } = require("react-router-dom");
// const { default: AddEquipment } = require("../pages/AddEquipment");
// const { default: AllEquipment } = require("../pages/AllEquipment");
// const { default: ViewDetails } = require("../pages/ViewDetails");

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout/>,
    errorElement: <h2>Error page</h2>,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/addEquipment",
        element: <AddEquipment/>,
      },
      {
        path: "/allEquipment",
        element: <AllEquipment />,
        loader: () => fetch("http://localhost:3000/product"),
      },
      {
        path: "/myEquipment",
        element: <MyEquipment />,
      },
      {
        path: "/product/:id",
        element: <ViewDetails />,
      },
      {
        path: "/login",
        element: <Login/>,
      },
      {
        path: "/signup",
        element: <SignUp/>,
      },
    ],
  },
]);

export default router;
