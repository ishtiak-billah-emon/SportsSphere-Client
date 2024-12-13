import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./routes/AppRouter";
// import App from "./App.jsx";
// import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import AddEquipment from "./pages/AddEquipment.jsx";
// import AllEquipment from "./pages/AllEquipment.jsx";
// import ViewDetails from "./pages/ViewDetails.jsx";
// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <div>Hello world!</div>,
//   },
//   {
//     path: "addEquipment",
//     element: <AddEquipment />,
//   },
//   {
//     path: "allEquipment",
//     element: <AllEquipment />,
//     loader: () => fetch("http://localhost:3000/product"),
//   },
//   {
//     path: "/product/:id",
//     element: <ViewDetails />,
//   },
// ]);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* <ToastContainer position="top-center" /> */}
         <RouterProvider router={router} />
  </StrictMode>
);
