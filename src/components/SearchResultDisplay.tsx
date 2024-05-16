import { useState } from "react";
import { useArtworksSearchQuery } from "@/queries/useArtworksSearchQuery";
import { Alert, AlertTitle, AlertDescription } from "../components/ui/alert";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { fad, fas } from "@awesome.me/kit-b1390146c4/icons";
import ArtworkCard from "../components/ArtworkCard";

export default function SearchResultDisplay(props: {
  query: string;
  departmentId: number;
  dateBegin: number;
  dateEnd: number;
  isHighlight: boolean;
  hasImage: boolean;
  geoLocation: string;
}) {

  const [page, setPage] = useState(1);
  const artworksPerPage = 20 as number;

  const ArtworksSearchQueryData = useArtworksSearchQuery(
    props.query,
    props.departmentId,
    props.dateBegin,
    props.dateEnd,
    props.isHighlight,
    props.hasImage,
    props.geoLocation
  );

  if (ArtworksSearchQueryData.isLoading) {
    return (
      <>
        <div className="flex justify-center mx-auto mt-4">
          <Alert className="h-16 w-auto rounded-xl ">
            <FontAwesomeIcon icon={fad.faSync} spin size="lg" />
            <AlertTitle>Loading</AlertTitle>
          </Alert>
        </div>
      </>
    );
  }

  const { data: artworksSearchData } = ArtworksSearchQueryData;

  if (ArtworksSearchQueryData.isError || !artworksSearchData) {
    return (
      <>
        <div className="flex justify-center mx-auto mt-4">
          <Alert className="h-16 w-auto rounded-xl ">
            <FontAwesomeIcon icon={fad.faTriangleExclamation} beat size="lg" />
            <AlertTitle>Error loading</AlertTitle>
            <AlertDescription>
              <button
                className="rounded bg-red-700 px-3.5 text-sm font-semibold text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
                onClick={() => ArtworksSearchQueryData.refetch()}
              >
                Reload
              </button>
            </AlertDescription>
          </Alert>
        </div>
      </>
    );
  }

  if (artworksSearchData.total === 0) {
    return (
      <div className="mx-auto max-w-2xl px-4 py-2 sm:px-6 sm:py-2 lg:max-w-7xl lg:px-8">
        <div className="flex justify-between mt-4">
          <button
            className={`rounded px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 cursor-not-allowed bg-slate-500`}
            >
            <FontAwesomeIcon
              icon={fas.faCaretLeft}
              style={{ color: "#ffffff" }}
            />
            &nbsp;Précédent
          </button>
          <button
            className={`rounded px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 cursor-not-allowed bg-slate-500`}
          >
            Suivant&nbsp;
            <FontAwesomeIcon
              icon={fas.faCaretRight}
              style={{ color: "#ffffff" }}
            />
          </button>
        </div>
        <h1 className="text-center text-2xl font-semibold mt-4">
          No results found
        </h1>
      </div>
    )
  }

  const artworksId = artworksSearchData.objectIDs;
  const artworksTotal = artworksSearchData.total;

  const totalPages = Math.ceil(artworksTotal / artworksPerPage);

  const artOfPage = artworksId.slice(
    (page - 1) * artworksPerPage,
    page * artworksPerPage
  );

  const prevPage = () => {
    setPage(page - 1);
  };

  const nextPage = () => {
    setPage(page + 1);
  };

  return (
    <div className="mx-auto max-w-2xl px-4 py-2 sm:px-6 sm:py-2 lg:max-w-7xl lg:px-8">
      <div className="flex justify-between mt-4">
        <button
          className={`rounded px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 ${
            page === 1
              ? "cursor-not-allowed bg-slate-500"
              : "bg-indigo-600 hover:bg-indigo-500"
          }`}
          onClick={prevPage}
          disabled={page === 1}
        >
          <FontAwesomeIcon
            icon={fas.faCaretLeft}
            style={{ color: "#ffffff" }}
          />
          &nbsp;Précédent
        </button>
        <button
          className={`rounded px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 bg-indigo-600 ${
            page === totalPages
              ? "cursor-not-allowed bg-slate-500"
              : "bg-indigo-600 hover:bg-indigo-500"
          }`}
          onClick={nextPage}
          disabled={page === totalPages}
        >
          Suivant&nbsp;
          <FontAwesomeIcon
            icon={fas.faCaretRight}
            style={{ color: "#ffffff" }}
          />
        </button>
      </div>
      <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
        {
        artOfPage.map((artworkId) => (
          <ArtworkCard artworkId={artworkId} key={artworkId} />
        ))}
      </div>
    </div>
  );
}
