import { create } from "zustand";
import { persist } from "zustand/middleware";

type CartState = {
    ids: number[];
    setIds: (ids: number[]) => void;
    add: (id: number) => void;
    remove: (id: number) => void;
    reset: () => void;
};

export const toggleCartStore = create<CartState>()(
    persist(
        (set) => ({
            ids: [],
            setIds: (ids) => set({ ids }),
            add: (id) =>
                set((s) => (s.ids.includes(id) ? s : { ids: [...s.ids, id] })),
            remove: (id) => set((s) => ({ ids: s.ids.filter((i) => i !== id) })),
            reset: () => set({ ids: [] }),
        }),
        {
            name: "cart-storage",
            partialize: (state) => ({ ids: state.ids }),
            skipHydration: true,
        },
    ),
);