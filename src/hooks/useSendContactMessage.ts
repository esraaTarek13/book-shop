import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";
import { contactApi } from "@/api/contact";

export function useSendContactMessage() {
    return useMutation({
        mutationFn: contactApi,
        onSuccess: () => toast.success("Your message has been sent!"),
        onError: () => toast.error("Something went wrong, please try again."),
    });
}