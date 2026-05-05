import { auth } from "@/service/authServices";
import { SuccessCallback } from "@/type";
import { useMutation, useQueryClient } from "@tanstack/react-query"

export const useAuthReq = (onSuccess: SuccessCallback) => {
    const queryClient = useQueryClient()

    return useMutation({
        mutationFn: async (data: {
            email: string;
            password: string;
        }) => {
            const response = await auth(data)
            return response
        },
        onSuccess: (response) => {
            if (onSuccess) {
                queryClient.invalidateQueries({ queryKey: ['token'] });
                onSuccess(response)
            }
        },
        onError: async (error: {
            response: unknown
        }) => {
            return error?.response || "Err"
        },
    })
}