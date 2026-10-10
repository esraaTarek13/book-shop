"use client";

import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";
import type { AxiosError } from "axios";
import { deleteFromWishlist } from "@/api/wishlist";
import type { ApiErrorResponse } from "@/types/api";
import { toggleWishlistStore } from "@/store/toggleWishlistStore";

export const useDeleteFromWishlist = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (bookId: number) => deleteFromWishlist(bookId),
    onMutate: (bookId) => {
      toggleWishlistStore.getState().remove(bookId);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["wishlist"] });
      toast.success("Book removed from wishlist");
    },
    onError: (error: AxiosError<ApiErrorResponse>, bookId) => {
      toggleWishlistStore.getState().add(bookId);
      toast.error(error.response?.data?.message || "Failed to remove book from wishlist");
    },
  });
};