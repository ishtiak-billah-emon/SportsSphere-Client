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
import ErrorPage from "../pages/ErrorPage";


const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage/>,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/home",
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
        path: "/update/id/:id",
        element: (
          <PrivateRoute>
            <UpdateEquipment />
          </PrivateRoute>
        ),
      },
      {
        path: "/product/id/:id",
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
