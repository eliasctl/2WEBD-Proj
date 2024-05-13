import { useQuery } from "@tanstack/react-query";
import { Artwork } from "../types";
import { baseUrl } from "../conf";

export function useArtworkDetailQuery(artworkId: number) {
  return useQuery({
    queryKey: ["artwork", artworkId],
    queryFn: async () => {
      const response = await fetch(`${baseUrl}/objects/${artworkId}`);
      const data = await response.json();
      return data as Artwork;
    },
  });
}