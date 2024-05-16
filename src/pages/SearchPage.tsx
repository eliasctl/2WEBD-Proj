import SearchBar from "@/components/SearchBar";
import { useLocation } from "react-router-dom";
import SearchResultDisplay from "@/components/SearchResultDisplay";

export default function SearchPage() {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const query = params.get("query");

  if (query) {
    return (
      <>
        <div id="searchResultDisplay" className="pt-5">
          <div className="text-2xl text-center font-semibold">Result for : <u>{query}</u></div>
          <SearchResultDisplay
            query={query}
            departmentId={0}
            dateBegin={new Date().getFullYear()}
            dateEnd={new Date().getFullYear()}
            isHighlight={false}
            hasImage={false}
            geoLocation={""}
          />
        </div>
      </>
    );
  } else {
    return (
      <>
        <SearchBar />
      </>
    );
  }
}
