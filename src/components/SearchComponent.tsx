import { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { fas } from "@awesome.me/kit-b1390146c4/icons";
import { useNavigate, useLocation } from "react-router-dom";

function SearchComponent() {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if ((event.metaKey || event.ctrlKey) && event.key === "k") {
        event.preventDefault();
        const searchInput = document.getElementById("searchNavbar");
        if (searchInput) {
          searchInput.focus();
        }
      }
    }

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [location.pathname]);

  const handleSearchKeyDown = (
    event: React.KeyboardEvent<HTMLInputElement>
  ) => {
    if (event.key === "Enter") {
      const searchValue = (event.target as HTMLInputElement).value;
      navigate(`/Search?query=${encodeURIComponent(searchValue)}`);
    }
  };

  return (
    <div className="relative">
      <div className="absolute inset-y-0 pl-3 flex items-center pointer-events-none">
        <FontAwesomeIcon icon={fas.faSearch} className="text-gray-400" />
      </div>

      <input
        type="text"
        id="searchNavbar"
        className="py-3 pl-10 pr-4 w-full border border-neutral-900 rounded focus:ring-blue-500 block"
        placeholder="Enter your search"
        onKeyDown={handleSearchKeyDown}
      />
      <div className="absolute inset-y-0 pl-3 flex items-center pointer-events-none">
        <FontAwesomeIcon icon={fas.faSearch} className="text-gray-400" />
      </div>
    </div>
  );
}

export default SearchComponent;
