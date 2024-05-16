import { useParams } from "react-router-dom";

import Error from "../components/Error";
import { useArtworkDetailQuery } from "../queries/useArtworkDetailQuery";

export default function ArtworkPage() {
  const { id } = useParams();
  if (id === undefined) {
    return (
      <Error
        errorType="400"
        errorTitle="Bad Request"
        errorDescription="The id of the work to display is missing the page cannot be displayed"
        errorReturnLink="/"
      />
    );
  }

  if (isNaN(parseInt(id))) {
    return (
      <Error
        errorType="400"
        errorTitle="Bad Request"
        errorDescription="The id of the work to display is not a number the page cannot be displayed"
        errorReturnLink="/"
      />
    );
  }

  const artworkId = parseInt(id);

  const artworkDetailQuery = useArtworkDetailQuery(artworkId);

  if (artworkDetailQuery.isLoading) {
    return <div>Loading...</div>;
  }

  if (artworkDetailQuery.isError) {
    return <div>An error occurred</div>;
  }

  const artwork = artworkDetailQuery.data;

  if (artwork === undefined || artwork === null) {
    return (
      <Error
        errorType="404"
        errorTitle="Not Found"
        errorDescription="The work you are looking for does not exist"
        errorReturnLink="/"
      />
    );
  }

  return (
    <>
      <section className="w-full py-12 md:py-24">
        <div className="container grid gap-10 px-4 md:px-6">
          <div className="grid gap-4 text-center">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl lg:text-5xl">
              {artwork.title}
            </h2>
            <p className="text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Departement of{" "}
              {artwork.department === "" ? "Unknown" : artwork.department}
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:gap-12">
            <img
              alt={artwork.title}
              className="aspect-[4/3] w-full rounded-lg object-scale-down"
              height={600}
              src={artwork.primaryImage? artwork.primaryImage : "/placeholderE-MET.svg"}
              width={800}
            />
            <div className="grid gap-4">
              <div>
                <h3 className="text-2xl font-bold">Artist</h3>
                <p className="mt-2 text-gray-500">
                  {artwork.artistDisplayName === ""
                    ? "Unknown"
                    : artwork.artistDisplayName}
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-bold">Date</h3>
                <p className="mt-2 text-gray-500">
                  {artwork.objectDate === "" ? "Unknown" : artwork.objectDate}
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-bold">Dimensions</h3>
                <p className="mt-2 text-gray-500">
                  {artwork.dimensions === "" ? "Unknown" : artwork.dimensions}
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-bold">Culture</h3>
                <p className="mt-2 text-gray-500">
                  {artwork.culture === "" ? "Unknown" : artwork.culture}
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-bold">Medium</h3>
                <p className="mt-2 text-gray-500">
                  {artwork.medium === "" ? "Unknown" : artwork.medium}
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-bold">Classification</h3>
                <p className="mt-2 text-gray-500">
                  {artwork.classification === ""
                    ? "Unknown"
                    : artwork.classification}
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-bold">Credit Line</h3>
                <p className="mt-2 text-gray-500">
                  {artwork.creditLine === "" ? "Unknown" : artwork.creditLine}
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-bold">Accession Number</h3>
                <p className="mt-2 text-gray-500">
                  {artwork.accessionNumber === ""
                    ? "Unknown"
                    : artwork.accessionNumber}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
