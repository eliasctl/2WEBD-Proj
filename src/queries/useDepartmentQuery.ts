import { useQuery } from "@tanstack/react-query";
import { baseUrl } from "../conf";
import { Artworks } from "../types";

export function useDepartmentQuery(departmentId: number) {
    return useQuery({
        queryKey: ["department", departmentId],
        queryFn: async () => {
            const response = await fetch(`${baseUrl}/objects?departmentIds=${departmentId}`);
            const department = await response.json();
            return department as Artworks;
        },
    })
}