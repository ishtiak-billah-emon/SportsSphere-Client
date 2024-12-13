import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import AddEquipment from "../pages/AddEquipment";
import AllEquipment from "../pages/AllEquipment";
import Home from "../pages/Home";
import Login from "../pages/Login";
import ViewDetails from "../pages/ViewDetails";
import MyEquipment from "../pages/MyEquipment";
import SignUp from "../pages/SignUp";
import PrivateRoute from "./PrivateRoute";
import UpdateEquipment from "../pages/UpdateEquipment";

// const { createBrowserRouter } = require("react-router-dom");
// const { default: AddEquipment } = require("../pages/AddEquipment");
// const { default: AllEquipment } = require("../pages/AllEquipment");
// const { default: ViewDetails } = require("../pages/ViewDetails");

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <h2>Error page</h2>,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/addEquipment",
        element: (
          <PrivateRoute>
            <AddEquipment />
          </PrivateRoute>
        ),
      },
      {
        path: "/allEquipment",
        element: <AllEquipment />,
        loader: () => fetch("http://localhost:3000/product"),
      },
      {
        path: "/myEquipment",
        element: (
          <PrivateRoute>
            <MyEquipment />
          </PrivateRoute>
        ),
      },
      {
        path: "/updateEquipment",
        element: (
          <PrivateRoute>
            <UpdateEquipment />
          </PrivateRoute>
        ),
      },
      {
        path: "/product/:id",
        element: (
          <PrivateRoute>
            <ViewDetails />
          </PrivateRoute>
        ),
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <SignUp />,
      },
    ],
  },
]);

export default router;
