import { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { fas } from "@awesome.me/kit-b1390146c4/icons";
export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <header className="flex flex-wrap sm:justify-start sm:flex-nowrap z-50 w-full bg-white text-sm py-3 sm:py-0">
        <nav
          className="relative max-w-[85rem] w-full mx-auto px-4 sm:flex sm:items-center sm:justify-between sm:px-6 lg:px-8"
          aria-label="Global"
        >
          <div className="flex items-center justify-between">
            <Link
              className="flex-none text-xl font-semibold"
              to="/"
              aria-label="Brand"
            >
              Metropolitan Museum of Art
            </Link>
            <div className="sm:hidden">
              <button
                type="button"
                className="hs-collapse-toggle size-9 flex justify-center items-center text-sm font-semibold rounded-lg border border-gray-200 text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none"
                data-hs-collapse="#navbar-collapse-with-animation"
                aria-controls="navbar-collapse-with-animation"
                aria-label="Toggle navigation"
                onClick={toggleMenu}
              >
                <FontAwesomeIcon
                  className={
                    isMenuOpen
                      ? "hidden flex-shrink-0 size-4"
                      : "block flex-shrink-0 size-4"
                  }
                  icon={fas.faBars}
                />
                <FontAwesomeIcon
                  className={
                    isMenuOpen
                      ? "block flex-shrink-0 size-4"
                      : "hidden flex-shrink-0 size-4"
                  }
                  icon={fas.faXmark}
                />
              </button>
            </div>
          </div>
          <div
            id="navbar-collapse-with-animation"
            className={`hs-collapse ${
              isMenuOpen ? "" : "hidden"
            } overflow-hidden transition-all duration-300 basis-full grow sm:block`}
          >
            <div className="flex flex-col gap-y-4 gap-x-0 mt-5 sm:flex-row sm:items-center sm:justify-end sm:gap-y-0 sm:gap-x-7 sm:mt-0 sm:ps-7">
              <Link
                className="font-semibold text-gray-500 hover:text-gray-400 sm:py-6"
                to="/Departments"
              >
                Departments <FontAwesomeIcon icon={fas.faList} />
              </Link>
              <Link
                className="font-semibold text-gray-500 hover:text-gray-400 sm:py-6"
                to="/"
                aria-current="page"
              >
                Search <FontAwesomeIcon icon={fas.faMagnifyingGlass} />
              </Link>
            </div>
          </div>
        </nav>
      </header>
      <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 relative flex flex-row justify-between items-center gap-x-8 border-t py-4 sm:py-0" />
      </div>
    </>
  );
}
