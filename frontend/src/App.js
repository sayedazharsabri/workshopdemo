import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Homepage from "./components/Homepage";
import AddUser from "./components/AddUser";
import EditUser from "./components/EditUser";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Homepage />,
    },
    {
      path: "/add-user",
      element: <AddUser />,
    },
    {
      path: "/edit-user",
      element: <EditUser />,
    },
    {
      path: "*",
      element: "Page not found",
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
