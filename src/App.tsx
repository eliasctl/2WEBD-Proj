import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";

import Error from "./components/Error";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import DepartmentsPage from "./pages/DepartmentsPage";
import DepartmentPage from "./pages/DepartmentPage";
import ArtworksCardsList from "./components/ArtworksCardsList";
import ArtworkPage from "./pages/ArtworkPage";

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
        <Footer />
      </>
    ),
    children: [
      {
        path: "/",
        element: (
          <>
            <Home />
            <ArtworksCardsList />
          </>
        ),
      },
      { path: "/Departments", element: <DepartmentsPage /> },
      { path: "/Department/:id", element: <DepartmentPage /> },
      { path: "/Artwork/:id", element: <ArtworkPage />}
    ],
  },
]);

export default function App() {
  return <RouterProvider router={rooter} />;
}
