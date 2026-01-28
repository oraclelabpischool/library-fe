import { fetchBook } from "@/service/bookServices"
import { useQuery } from "@tanstack/react-query"

export const useFetchBook = () => {

    return useQuery({
        queryFn: () => fetchBook(),
        queryKey: ["list-book"]
    })
}