import { fetchBook } from "@/service/bookServices"

export const useFetchBook = () => {
    return {
        mutationFn: fetchBook,
        onSuccess: (res: any) => res,
        onError: (err: any) => err
    }
}