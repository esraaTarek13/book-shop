import { create } from "zustand";
import { persist } from "zustand/middleware";

type WishlistState = {
    ids: number[];
    isHydrated: boolean;
    setIds: (ids: number[]) => void;
    add: (id: number) => void;
    remove: (id: number) => void;
    reset: () => void;
};

export const toggleWishlistStore = create<WishlistState>()(
    persist(
        (set) => ({
            ids: [],
            isHydrated: false,
            setIds: (ids) => set({ ids, isHydrated: true }),
            add: (id) =>
                set((s) => (s.ids.includes(id) ? s : { ids: [...s.ids, id] })),
            remove: (id) => set((s) => ({ ids: s.ids.filter((i) => i !== id) })),
            reset: () => set({ ids: [], isHydrated: false }),
        }),
        {
            name: "wishlist-storage",
            partialize: (state) => ({ ids: state.ids }),
            skipHydration: true,
        },
    ),
);