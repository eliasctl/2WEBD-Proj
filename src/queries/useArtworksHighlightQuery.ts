import { useQuery } from "@tanstack/react-query";
import { Departments } from "../types";
import { baseUrl } from "../conf";

export function useArtworksHighlightQuery() {
    return useQuery({
        queryKey: ["artworksHighlight"],
        queryFn: async () => {
            const response = await fetch(`${baseUrl}/search?q=&isHighlight=1`);
            const artworksHighlight = await response.json();
            return artworksHighlight["departments"] as Departments[];
        },
    })
}