import ArtCard from "./ArtworksCard"

export default function ArtworksCardsList() {
  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4 md:p-6">
      {Array.from({ length: 8 }).map(() => (
        <ArtCard />
      ))}
    </section>
  )
}
