import { Link } from "react-router-dom";
import Error from "./Error";
import { useArtworkDetailQuery } from "@/queries/useArtworkDetailQuery";
import { Alert, AlertTitle, AlertDescription } from "../components/ui/alert";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { fad, fas } from "@awesome.me/kit-b1390146c4/icons";

export default function ArtworkCard(props: { artworkId: number }) {
  const { artworkId } = props;

  if (artworkId === undefined) {
    return (
      <Error
        errorType="400"
        errorTitle="Bad Request"
        errorDescription="The id of the artwork to display is missing the page cannot be displayed"
        errorReturnLink="/"
      />
    );
  }

  if (isNaN(artworkId)) {
    return (
      <Error
        errorType="400"
        errorTitle="Bad Request"
        errorDescription="The id of the artwork to display is not a number the page cannot be displayed"
        errorReturnLink="/"
      />
    );
  }

  const artworkDetailQuery = useArtworkDetailQuery(artworkId);
  if (artworkDetailQuery.isLoading) {
    return (
      <>
        <div className="animate-pulse group relative overflow-hidden rounded shadow-lg bg-gray-200">
          <div className="aspect-square flex items-center justify-center w-full h-full">
            <FontAwesomeIcon icon={fad.faSync} spin size="6x" />
          </div>
          <div className="bg-white p-4">
            <h3 className="font-semibold text-lg md:text-xl text-center">
              Chargement ...
            </h3>
          </div>
        </div>
      </>
    );
  }

  const { data: artwork } = artworkDetailQuery;

  if (artworkDetailQuery.isError || !artwork) {
    return (
      <>
        <div className="animate-pulse group relative overflow-hidden rounded shadow-lg bg-gray-200">
          <div className="aspect-square flex items-center justify-center w-full h-full">
            <Alert className="h-16 w-auto rounded-xl ">
              <FontAwesomeIcon
                icon={fad.faTriangleExclamation}
                beat
                size="lg"
              />
              <AlertTitle>Error loading</AlertTitle>
              <AlertDescription>
                <button
                  className="rounded bg-red-700 px-3.5 text-sm font-semibold text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
                  onClick={() => artworkDetailQuery.refetch()}
                >
                  Reload
                </button>
              </AlertDescription>
            </Alert>
          </div>
          <div className="bg-white p-4">
            <h3 className="font-semibold text-lg md:text-xl text-center">
              🖼️ Error 🛠️
            </h3>
          </div>
        </div>
      </>
    );
  }

  if (
    artwork === undefined ||
    artwork === null ||
    artwork.objectID === undefined ||
    artwork.objectID === null
  ) {
    return (
      <>
        <div className="animate-pulse group relative overflow-hidden rounded shadow-lg bg-gray-200">
          <div className="aspect-square flex items-center justify-center w-full h-full">
            <Alert className="h-16 w-auto rounded-xl ">
              <FontAwesomeIcon
                icon={fas.faLandmarkMagnifyingGlass}
                beat
                size="lg"
              />
              <AlertTitle>Artwork not found</AlertTitle>
            </Alert>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <Link to={"/Artwork/"+artwork.objectID}>
        <div className="group relative overflow-hidden rounded shadow-lg">
          <img
            alt={artwork.title? artwork.title : "Artwork image"}
            className="aspect-square object-cover w-full transition-all group-hover:scale-105"
            height="400"
            src={artwork.primaryImage? artwork.primaryImage : "/placeholder.svg"}
            width="400"
          />
          <div className="bg-white p-4">
            <h3 className="font-semibold text-lg md:text-xl group-hover:underline">
              {artwork.title? artwork.title : "No title"}
            </h3>
          </div>
        </div>
      </Link>
    </>
  );
}
