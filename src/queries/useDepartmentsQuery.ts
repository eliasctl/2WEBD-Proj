import { useQuery } from "@tanstack/react-query";
import { Departments } from "../types";
import { baseUrl } from "../conf";

export function useDepartmentsQuery() {
    return useQuery({
        queryKey: ["departments"],
        queryFn: async () => {
            const response = await fetch(`${baseUrl}/departments`);
            const departments = await response.json();
            return departments["departments"] as Departments[];
        },
    })
}