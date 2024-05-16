import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";

import Error from "./components/Error";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import ArtworksHighlight from "./components/ArtworksHighlight";
import SearchPage from "./pages/SearchPage";
import DepartmentsPage from "./pages/DepartmentsPage";
import DepartmentPage from "./pages/DepartmentPage";
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
      <div className="select-none cursor-default">
        <Navbar />
        <Outlet />
        <Footer />
      </div>
    ),
    children: [
      {
        path: "/",
        element: (
          <>
            <Home />
            <ArtworksHighlight />
          </>
        )
      },
      { path: "/Search", element: <SearchPage />},
      { path: "/Departments", element: <DepartmentsPage /> },
      { path: "/Department/:id", element: <DepartmentPage /> },
      { path: "/Artwork/:id", element: <ArtworkPage />}
    ],
  },
]);

export default function App() {
  return <RouterProvider router={rooter} />;
}
