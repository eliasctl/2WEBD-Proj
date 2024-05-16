import { useQuery } from "@tanstack/react-query";
import { Artworks } from "../types";
import { baseUrl } from "../conf";

export function useArtworksHighlightQuery() {
    return useQuery({
        queryKey: ["artworksHighlight"],
        queryFn: async () => {
            const response = await fetch(`${baseUrl}/search?q=&isHighlight=true`);
            const artworksHighlight = await response.json();
            return artworksHighlight as Artworks;
        },
    })
}