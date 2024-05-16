import ArtworkCard from "./ArtworkCard";
import { useArtworksHighlightQuery } from "@/queries/useArtworksHighlightQuery";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { fad } from "@awesome.me/kit-b1390146c4/icons";
import { Alert, AlertTitle, AlertDescription } from "./ui/alert";

export default function ArtworksHighlight() {
  const ArtworksHighlightQueryData = useArtworksHighlightQuery();

  if (ArtworksHighlightQueryData.isLoading) {
    return (
      <>
        <div className="flex justify-center mx-auto mt-4">
          <Alert className="h-16 w-auto rounded-xl ">
            <FontAwesomeIcon icon={fad.faSync} spin size="lg" />
            <AlertTitle>Loading</AlertTitle>
          </Alert>
        </div>
        <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4 md:p-6">
          {Array.from({ length: 8 }).map((_, index) => (
            <div key={"ArtLoading_" + index}>
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
            </div>
          ))}
        </section>
      </>
    );
  }

  const { data: ArtworksHighlight } = ArtworksHighlightQueryData;

  if (ArtworksHighlightQueryData.isError || !ArtworksHighlight) {
    return (
      <>
        <div className="flex justify-center mx-auto mt-4">
          <Alert className="h-16 w-auto rounded-xl ">
            <FontAwesomeIcon icon={fad.faTriangleExclamation} beat size="lg" />
            <AlertTitle>Error loading</AlertTitle>
            <AlertDescription>
              <button
                className="rounded bg-red-700 px-3.5 text-sm font-semibold text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
                onClick={() => ArtworksHighlightQueryData.refetch()}
              >
                Reload
              </button>
            </AlertDescription>
          </Alert>
        </div>
      </>
    );
  }

  const randomArtworks: number[] = [];
  if (ArtworksHighlight.total > 8) {
    while (randomArtworks.length < 8) {
      const randomIndex = Math.floor(Math.random() * ArtworksHighlight.total);
      if (!randomArtworks.includes(randomIndex)) {
        randomArtworks.push(randomIndex);
      }
    }
  } else {
    for (let i = 0; i < ArtworksHighlight.total; i++) {
      randomArtworks.push(i);
    }
  }

  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4 md:p-6">
      {randomArtworks.map((artworkId) => (
        <div key={"Art_" + artworkId}>
          <ArtworkCard artworkId={artworkId} />
        </div>
      ))}
    </section>
  );
}
