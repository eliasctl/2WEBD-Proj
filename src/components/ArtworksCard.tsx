import { Link } from "react-router-dom";
export default function ArtCard() {
  return (
    <div className="group relative overflow-hidden rounded-lg shadow-lg">
      <Link className="absolute inset-0 z-10" to="#">
        <span className="sr-only">View artwork details</span>
      </Link>
      <img
        alt="Artwork 1"
        className="aspect-square object-cover w-full transition-all group-hover:scale-105"
        height="400"
        src="/placeholder.svg"
        width="400"
      />
      <div className="bg-white dark:bg-gray-950 p-4">
        <h3 className="font-semibold text-lg md:text-xl group-hover:underline">
          <Link to="#">Vibrant Strokes</Link>
        </h3>
      </div>
    </div>
  );
}
