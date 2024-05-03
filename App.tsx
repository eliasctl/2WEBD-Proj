import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";

import Error from "./components/Error";
import Departments from "./pages/Departments";
import Navbar from "./components/Navbar";

const rooter = createBrowserRouter([
  {
    path: "/",
    errorElement: (
      <Error
        errorType="404"
        errorTitle="Page not found"
        errorDescription="The page you are looking for might have been removed or is temporarily unavailable."
        errorReturnLink="/"
      />
    ),
    element: (
      <>
        <Navbar />
        <Outlet />
      </>
    ),
    children: [
      {
        path: "/",
        element: (<Departments/>),
      },
      { path: "/new", element: <div>Bonjour</div> },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={rooter} />;
}
