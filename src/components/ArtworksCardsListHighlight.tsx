import ArtworkCard from "./ArtworkCard"
import Error from "./Error"
import { useArtworksHighlightQuery } from "@/queries/useArtworksHighlightQuery"

export default function ArtworksCardsList() {

  const ArtworksHighlightQueryData = useArtworksHighlightQuery()

  if (ArtworksHighlightQueryData.isLoading) {
    return <div>Loading...</div>
  }

  if (ArtworksHighlightQueryData.isError) {
    return <div>Error: {ArtworksHighlightQueryData.error.message}</div>
  }

  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4 md:p-6">
      {Array.from({ length: 8 }).map((_, index) => (
        <div key={"Art_"+index}>
          <ArtworkCard  artworkId={254819} />
        </div>
      ))}
    </section>
  )
}
