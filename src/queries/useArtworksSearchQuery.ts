import { useQuery } from "@tanstack/react-query";
import { Artworks } from "../types";
import { baseUrl } from "../conf";

export function useArtworksSearchQuery(query: string = "", departmentId: number = 0, dateBegin: number = new Date().getFullYear(), dateEnd: number = new Date().getFullYear(), isHighlight: boolean = false, hasImage: boolean = false, geoLocation: string = "")
{
    let params = "q="+query;
    if(departmentId > 0) params += "&departmentId="+departmentId;
    if(dateBegin !== new Date().getFullYear()) params += "&dateBegin="+dateBegin;
    if(dateEnd !== new Date().getFullYear()) params += "&dateEnd="+dateEnd;
    if(isHighlight) params += "&isHighlight=true";
    if(hasImage) params += "&hasImage=true";
    if(geoLocation !== "") params += "&geoLocation="+geoLocation;
    return useQuery({
        queryKey: ["artworksSearch", query, departmentId, dateBegin, dateEnd, isHighlight, hasImage, geoLocation],
        queryFn: async () => {
            const response = await fetch(`${baseUrl}/search?${params}`);
            const artworksSearch = await response.json();
            return artworksSearch["departments"] as Artworks[];
        },
    })
}